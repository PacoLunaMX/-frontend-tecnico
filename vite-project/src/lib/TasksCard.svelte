<script>
    import Task from "./Task.svelte";
    import supabase from "../config/supabaseClient";
    import { onMount } from 'svelte';


    let tasks = []

    onMount(async () => {
        const { data, error} = await supabase.from("tasks").select()
        tasks = data
  });

    async function update() {
        const { data, error} = await supabase.from("tasks").select()
        tasks = data
    }



    // async function getTasks(){
    //     const { data, error} = await supabase.from("tasks").select()
    //     tasks = data
    //     return tasks
    // }
    
    // let promise = getTasks();

    $: tasksDone = tasks.filter(task=> !task.status).length
    $: tasksNotDone = tasks.filter(task=> task.status).length

    let title = ""
    async function handleAddTask(){
        if(title !== ""){
            const { data, error} = await supabase.from("tasks").insert([{title, status:false}])
            update();
            title = ""

        }else{
            alert("Necesitas agregar un título")
        }
    }

</script>

<div class="card">
    <h2>TaskMaster</h2>
    <div class="input-container">
        <input bind:value={title} type="text" placeholder="Add a new todo...">
        <button on:click={handleAddTask}>Add</button>
    </div>
    <div>
        <!-- {#await promise}
        <p>...cargando</p>
        {:then tasks} -->
            {#each tasks as task}
            <Task task={task} update={update}/>
            {/each}
        <!-- {/await} -->

    </div>
    <div>
        <p>Todos: {tasksDone} | Completed Todos: {tasksNotDone}</p>
    </div>
</div>

<style>
.card{
    background-color: #1F2937;
    min-height: 250px;
    width: 500px;
    padding: .5rem 1rem;
    border-radius: 10px;
    box-shadow: 1px 2px 3px 4px rgba(20,20,20,0.4);
    border: solid 1px gray;
    margin-top: 5rem;

}
h2{font-size: 28px;}

.input-container{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0;
    margin: 2rem 0;

}
.input-container input{
    flex-grow: 1;   
    border: solid 1px white;
    font-size: 16px;
    color: white;
    outline: white;
    background-color: #9ca8b88c;
    height: 40px;
    border-radius: 7px 0 0 7px ;
    padding-left: 1rem;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
color: white;
}
.input-container button{
    width: 5rem;
    border-radius:0 7px 7px 0;
    background-color:#3b82F6;
    outline: solid 1.4px #3b82F6;
    font-size: 18px;
    border: none;
    height: 44px;
    cursor: pointer;
    color: white;
}
.input-container button:hover{
    background-color:#3270d3;
    outline: solid 1.4px #3270d3;
}

</style>