<script>
    import NeonSign from "components/neon-sign/neon-sign.svelte";
    import BrickWall from "components/backdrops/brick-wall.svelte";
</script>

<BrickWall>
    <div class="inner">
        <div class="neon-sign">
            <NeonSign text="BE RIGHT BACK" />
        </div>

        <div class="frame swing">

        </div>
    </div>
</BrickWall>

<style>
.inner {
    height: 100%;

    height: 100%;
    width: 100%;

    display: flex;
    justify-content: flex-end;
    flex-flow: column nowrap;

    display: grid;

    grid-template:
        "neon neon neon . " 1fr
        ". header header ." 1fr
        "flavor flavor flavor flavor" 1fr
        "corner . . ." 12vh / 1fr 1fr 1fr 1fr;

    position: relative;

    z-index: 1;

    padding: 1rem;

    color: #F7F4EA;
}

.neon-sign {
    font-size: 3vw;
    grid-area: neon;
}

.frame {
    width: 20rem;
    height: 30rem;

    background: red;

    /* border: 1rem solid white; */
    background-image: url("https://via.placeholder.com/300");

}


@keyframes swing {
    0% { transform: rotate(3deg); }
    100% { transform: rotate(-3deg); }
}


.swing {
    animation: swing ease-in-out 3s infinite alternate;
    transform-origin: center -20px;    
}

</style>