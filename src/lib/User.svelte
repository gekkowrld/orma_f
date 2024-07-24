<script lang="ts">
let user_id: string|null = sessionStorage.getItem("user_id")
let user_cookie: string = document.cookie;

let base_url: string = import.meta.env.BASE_URL;

// Send a request to '/user' for user details.
fetch(`${base_url}/user/${user_id}`, {
  method: 'GET',
  headers: {
  'Authorization': `Bearer ${user_cookie}`
  },
}).then(response => {
    console.log(response)
  }).catch(error => {
    console.error(error)
  })
}
</script>
