<script>
  import Button, { Label } from '@smui/button'
  import { navigate } from 'svelte-routing'
  import './HomePage.scss'

  const goToDiagnosis = () => {
    navigate('/diagnosis', { replace: true })
  }
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
  App is using test API by <a href="https://apimedic.com/" target="_blank">ApiMedic</a>
</div>
<div class="button-container">
  <Button class="button" variant="raised" on:click={goToDiagnosis}>
    <Label>Get Diagnosis!</Label>
  </Button>
</div>
