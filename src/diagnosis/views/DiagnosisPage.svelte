<script>
  import DiagnosisForm from '../components/DiagnosisForm.svelte'
  import Diagnosis from '../components/Diagnosis.svelte'
  import DiagnosisStore from '../store/store'
  import { onDestroy } from 'svelte'

  onDestroy(() => {
    DiagnosisStore.clearDiagnosis()
  })
</script>

<style>
  .potential-diagnosis {
    margin-top: 20px;
  }
</style>

<svelte:head>
  <title>Pick your symptoms</title>
</svelte:head>

<div class="mdc-typography--headline3">Diagnosis</div>

{#if $DiagnosisStore.diagnosis}
  <div class="potential-diagnosis mdc-typography--body1">
    List of potential diagnosis:
  </div>
  {#each $DiagnosisStore.diagnosis as diagnosis, i}
    <Diagnosis
      issue={diagnosis.Issue}
      specializations={diagnosis.Specialisation} />
  {/each}
{:else}
  <DiagnosisForm />
{/if}
