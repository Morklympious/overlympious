<div class="container">
    <div class="monitor">
        <div class="screen">
            <slot />
        </div>
    </div>
</div>

<style>
.monitor {
	background: #000;
    position: relative;
    padding: 1rem 1rem 2rem 1rem;
    border-radius: 1rem;

    transition: margin-right 1s;
    animation: tvflicker 5s infinite alternate;
}

.monitor:after {
	content: '';
	display: block;
	position: absolute;
	bottom: 3%;
	left: 36%;
	height: .5%;
	width: 28%;
	background: #ddd;
	border-radius: 50%;
	box-shadow: 0 0 3px 0 white;
}

.screen {
	position: relative;
	background-color: #777;
	background-size: cover;
	background-position: top center;
	position: relative;
	overflow: hidden;
}

@keyframes tvflicker {
	0%   { box-shadow: 0 0 100px 0 rgba(225,235,255,0.4); }
	100% { box-shadow: 0 0 60px 0 rgba(200,220,255,0.6); }
}

</style>
