<script>
  import DiagnosisForm from "../components/DiagnosisForm.svelte"
  import DiagnosisStore from '../store/store'

</script>

<style>
</style>

<svelte:head>
  <title>Pick your symptoms</title>
</svelte:head>

<h1>Get your diagnosis</h1>

{#if $DiagnosisStore.diagnosis}
  <div>placeholder for diagnosis description</div>
{:else}
  <DiagnosisForm />
{/if}
