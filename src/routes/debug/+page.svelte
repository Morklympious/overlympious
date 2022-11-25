<script>
    import { browser } from "$app/environment";
    let pre;

    if(browser) {
        window.document.body.style.background = "white";
        window.obsstudio.getScenes((scenes) => {
            document.body.textContent = scenes;
        });

        window.addEventListener("obsSourceVisibleChanged", (event) => {
            document.body.textContent = event.detail.name;
        });
    }
</script>

<pre bind:this={pre} style:background={"white"}>
    {#if browser}
    {JSON.stringify(window.obsstudio)}
    {/if}
</pre>
