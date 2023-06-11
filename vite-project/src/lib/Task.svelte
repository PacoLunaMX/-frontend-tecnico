<script>
    import supabase from "../config/supabaseClient";
    export let task;
    export let update;

    const handleTaskDone = async()=>{
        const { data, error} = await supabase.from("tasks").update({title:task.title, status:true}).eq("id", task.id).select()
        console.log(data)
        update();
    }

    const handleRemoveTask = async()=>{
        const { data, error} = await supabase.from("tasks").delete().eq("id", task.id)
        update();
    }

</script>


 <div class="{task.status ? "task done": "task"}">
    <p>{task.title}</p>
    <div>
        {#if !task.status }
        <button on:click={handleTaskDone} class="check">&#10004;</button>
        {/if}
        <button on:click={handleRemoveTask} class="cross">&#9587;</button>
    </div>
 </div>
 

 <style>
.task{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(170, 172, 174, 0.334);
    border-radius: 10px;
    margin-left: 3rem;
    margin-bottom: .7rem;
    padding: .2rem .5rem;   
}

.task.done {
    text-decoration: line-through;
    color: gray;
}

.check{
    color: green;
    font-size: 20px;
}

.cross{
    color: red;
    font-size: 18px;
}


button{
background-color: transparent;
border: none;
 }

 button:hover{
opacity: 70%;
cursor: pointer;
 }
 
 </style>