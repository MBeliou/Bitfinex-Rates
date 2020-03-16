<style>
  /** Global preloader styles **/
  .pl,
  .pl:before,
  .pl:after {
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .pl {
    margin: 0 auto 1.5em auto;
    position: relative;
    width: 3em;
    height: 3em;
  }
  .pl:before,
  .pl:after {
    background: currentColor;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    transform-origin: 50% 100%;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    -webkit-clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .pl-name {
    text-align: center;
  }

  /* Flip */
  .pl-flip {
    animation-name: flipA;
    animation-timing-function: steps(1);
  }
  .pl-flip:before,
  .pl-flip:after {
    transform-origin: 50% 50%;
  }
  .pl-flip:before {
    animation-name: flipB;
  }
  .pl-flip:after {
    animation-name: flipC;
  }
  @keyframes flipA {
    from,
    75%,
    to {
      transform: rotate(0);
    }
    25%,
    50% {
      transform: rotate(90deg);
    }
  }
  @keyframes flipB {
    from {
      transform: translateY(0) rotateX(0deg);
    }
    6.25% {
      transform: translateY(0) rotateX(0deg);
    }
    12.5% {
      transform: translateY(-50%) rotateX(90deg);
    }
    18.75% {
      transform: translateY(0) rotateX(180deg);
    }
    31.25% {
      transform: translateY(0) rotateX(180deg);
    }
    37.5% {
      transform: translateY(-50%) rotateX(270deg);
    }
    43.75% {
      transform: translateY(0) rotateX(360deg);
    }
    50% {
      transform: translateY(0) rotateX(360deg);
    }
    56.25% {
      transform: translateY(0) rotateX(360deg);
    }
    62.5% {
      transform: translateY(-50%) rotateX(450deg);
    }
    68.75% {
      transform: translateY(0) rotateX(540deg);
    }
    81.25% {
      transform: translateY(0) rotateX(540deg);
    }
    87.5% {
      transform: translateY(-50%) rotateX(630deg);
    }
    93.75% {
      transform: translateY(0) rotateX(720deg);
    }
    to {
      transform: translateY(0) rotateX(720deg);
    }
  }
  @keyframes flipC {
    from {
      transform: translateY(100%) rotateZ(180deg) rotateX(0deg);
    }
    6.25% {
      transform: translateY(100%) rotateZ(180deg) rotateX(0deg);
    }
    12.5% {
      transform: translateY(150%) rotateZ(180deg) rotateX(90deg);
    }
    18.75% {
      transform: translateY(100%) rotateZ(180deg) rotateX(180deg);
    }
    31.25% {
      transform: translateY(100%) rotateZ(180deg) rotateX(180deg);
    }
    37.5% {
      transform: translateY(150%) rotateZ(180deg) rotateX(270deg);
    }
    43.75% {
      transform: translateY(100%) rotateZ(180deg) rotateX(360deg);
    }
    50% {
      transform: translateY(100%) rotateZ(180deg) rotateX(360deg);
    }
    56.25% {
      transform: translateY(100%) rotateZ(180deg) rotateX(360deg);
    }
    62.5% {
      transform: translateY(150%) rotateZ(180deg) rotateX(450deg);
    }
    68.75% {
      transform: translateY(100%) rotateZ(180deg) rotateX(540deg);
    }
    81.25% {
      transform: translateY(100%) rotateZ(180deg) rotateX(540deg);
    }
    87.5% {
      transform: translateY(150%) rotateZ(180deg) rotateX(630deg);
    }
    93.75% {
      transform: translateY(100%) rotateZ(180deg) rotateX(720deg);
    }
    to {
      transform: translateY(100%) rotateZ(180deg) rotateX(720deg);
    }
  }
</style>

<div>
  <div class="pl pl-flip text-gray-300 rounded-full" />
</div>
<p class="pl-name text-gray-300 text-lg">Querying Bitfinex...</p>
