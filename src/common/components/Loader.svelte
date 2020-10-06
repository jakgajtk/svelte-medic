<style>
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 180px;
    height: 180px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid #000000;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 80px;
      left: 80px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0;
      left: 0;
      width: 160px;
      height: 160px;
      opacity: 0;
    }
  }
  .loader {
    display: flex;
    justify-content: center;
    height: 80vh;
    align-items: center;
  }
</style>

<div class="loader">
  <div class="lds-ripple">
    <div />
    <div />
  </div>
</div>
