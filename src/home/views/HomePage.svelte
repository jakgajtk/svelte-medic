<script>
  import Button, { Label } from '@smui/button'
  import './HomePage.scss'
</script>

<style>
  .headline {
    margin-bottom: 110px;
    margin-top: 100px;
  }
  .description {
    margin-bottom: 15px;
  }
  .button-container {
    display: flex;
    margin-top: 80px;
    justify-content: center;
  }
</style>

<div class="mdc-typography--headline3 headline">
  Welcome to Svelte Medic app!
</div>
<div class="mdc-typography--body1 description">
  Check your symptoms and get diagnosis online using this magnificent
  application.
</div>
<div class="mdc-typography--body1 description">
  Created using <a href="https://svelte.dev/" target="_blank">Svelte</a> framework.
</div>
<div class="mdc-typography--body1 description">
  App is using test API by <a href="https://infermedica.com/" target="_blank">Infermedica</a>
</div>
<div class="button-container">
  <Button class="button" variant="raised">
    <Label>Get Diagnosis!</Label>
  </Button>
</div>
