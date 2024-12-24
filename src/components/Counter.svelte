<script>
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  Clicks: {count}
</button>

<style>
  button {
    padding: 0.5rem 1rem;
    background: #4a0404;
    color: white;
    border-radius: 0.25rem;
  }
</style>
