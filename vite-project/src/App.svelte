<script>
  import Header from "./lib/Header.svelte";
  import TasksCard from "./lib/TasksCard.svelte";
</script>

<Header/>
<main class="main">
  <TasksCard />
</main>

<style>
.main{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
