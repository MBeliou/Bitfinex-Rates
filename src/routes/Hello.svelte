<script>
  export let params = {};
  let name = "user";
</script>

<h1>Hello {params.name || name}!</h1>
<p>Change the url to change the name!</p>
