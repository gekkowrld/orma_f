<script lang="ts">
	import Errors from '$lib/Errors.svelte';
	import Head from '$lib/Head.svelte';
	let api_endpoint = `${import.meta.env.VITE_API_URL}/signup`;

	let imageSrc: any = '';
	let name: string = '';
	let id_no: string = '';
	let phone_number: string = '';
	let image: Blob;
	let password: string = '';
	let confirm_password: string = '';
	let is_err: boolean = false;
	let msg: string = 'Something went wrong';
	let url: string = '/';
	let code: number = 500;
	let res__: Response; // Help capture the response returned from the server

	function dispImg(event: any) {
		const file = event.target.files[0];
		if (file && file.type.startsWith('image/')) {
			const reader = new FileReader();
			reader.onload = () => {
				imageSrc = reader.result;
			};
			reader.readAsDataURL(file);
		}
	}

	async function handleSubmit(event: Event) {
		event.preventDefault();

		const formData = new FormData();
		formData.append('name', name);
		formData.append('phone_number', phone_number);
		formData.append('id_no', id_no);
		if (image) {
			formData.append('image', image);
		}
		formData.append('password', password);
		formData.append('confirm_password', confirm_password);

		try {
			const response = await fetch(api_endpoint, {
				method: 'POST',
				body: formData
			});

			res__ = response.clone();

			if (response.ok) {
				console.log('Form data submitted successfully');
				const res = await response.json();
				if (res.auth) {
					document.cookie = res.auth;
          sessionStorage.setItem("user_id", res.id);
				}

        // Redirect to homepage
			} else {
				const res = await res__.json();
				msg = res.msg;
				code = res.code;
				url = res__.url;
				is_err = true;
			}
		} catch (error) {
			console.error('Error submitting form data:', error);
			const res = await res__.json();
			msg = res.msg;
			code = res.code;
			url = res__.url;
			is_err = true;
		}
	}
</script>

<Head title="Join orma" />

{#if !is_err}
	<main>
		<div>
			<form method="post" enctype="multipart/form-data" on:submit|preventDefault={handleSubmit}>
				<label>
					Name:
					<input type="text" minlength="3" maxlength="100" required bind:value={name} />
				</label>
				<label>
					Phone number:
					<input type="text" required bind:value={phone_number} />
				</label>
				<label>
					Id no:
					<input type="text" required bind:value={id_no} />
				</label>
				<label>
					Password:
					<input type="password" required bind:value={password} />
				</label>
				<label>
					Confirm Password:
					<input type="password" required bind:value={confirm_password} />
				</label>
				<label>
					Upload Image:
					<input type="file" accept="image/*" bind:value={image} on:change={dispImg} />
				</label>
				{#if imageSrc}
					<img src={imageSrc} class="image-container" alt="Profile" />
				{/if}
				<input type="submit" value="Signin" />
				<input type="reset" value="Reset" />
			</form>
		</div>
	</main>
{:else}
	<Errors {msg} {code} {url} />
{/if}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Play&display=swap');

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: 'Play', sans-serif;
		font-weight: 400;
		font-style: normal;
	}
	div {
		background: grey;
		margin: 20px;
		padding: 20px;
		border-radius: 7px;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 15px;
		margin-top: 20px;
	}

	input {
		align-self: center;
		flex-grow: 1;
		border-radius: 4px;
		width: 90%;
		height: 21px;
		border-radius: 3px;
		padding: 5px;
		margin: 5px;
		font-family: 'Play', sans-serif;
		font-weight: 400;
		font-style: normal;
		border: 1px solid grey;
	}

	input[type='submit'],
	input[type='reset'] {
		height: 35px;
		padding: 7px;
		font-weight: bold;
		font-size: 21px;
		cursor: pointer;
	}

	input[type='file'] {
		border: none;
		padding: 5px;
	}

	label {
		font-weight: 700;
	}

	img.image-container {
		width: 70px;
	}
</style>
