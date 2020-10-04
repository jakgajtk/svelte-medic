<script>
  import Select from 'svelte-select'
  import Button, { Label } from '@smui/button'
  import Textfield, { Input } from '@smui/textfield'
  import Radio from '@smui/radio'
  import FormField from '@smui/form-field'

  import { symptoms, diagnosisParams } from '../store/store'
  import { authToken } from '../../auth/store/store'

  const GENDERS = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    },
  ]

  let selectedSymptoms = []
  let selectedGender
  let selectedBirthYear = 1990
  let submitDisabled
  let selectOptions = []

  submitDisabled = !selectedGender || !selectedSymptoms.length
  selectOptions = $symptoms?.map((item) => ({
    label: item.Name,
    value: item.ID,
  }))

  const handleSelect = (event) => {
    selectedSymptoms = [...selectedSymptoms, event.detail]
  }

  const handleDiagnosis = () => {
    console.log('rarara', selectedSymptoms, selectedBirthYear, selectedGender)
    diagnosisParams.set({
      symptoms: selectedSymptoms,
      yearOfBirth: selectedBirthYear,
      gender: selectedGender,
    })
  }
</script>

<style>
  .field-container {
    margin-top: 50px;
    width: 560px;
  }
  :root {
    --inputPadding: 4px 10px 0px 10px;
  }
  .submit-container {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  .radio {
    display: flex;
    align-items: center;
  }
</style>

<svelte:head>
  <title>Pick your symptoms</title>
</svelte:head>

<h1>Get your diagnosis</h1>
<div class="field-container">
  <h3>Pick your gender</h3>
  {#each GENDERS as gender}
    <FormField class="radio">
      <Radio bind:group={selectedGender} value={gender.value} />
      <span slot="label">{gender.label}</span>
    </FormField>
  {/each}
</div>

<div class="field-container">
  <h3>Select your year of birth</h3>
  <Textfield
    variant="outlined"
    bind:value={selectedBirthYear}
    label="Year of Birth"
    type="number" />
</div>

<div class="field-container">
  <h3>Pick your symptoms</h3>
  <Select
    items={selectOptions}
    bind:selectedSymptoms
    on:select={handleSelect}
    isMulti />
</div>

<div class="submit-container">
  <Button on:click={handleDiagnosis} variant="raised" disabled={submitDisabled}>
    <Label>Get Diagnosis</Label>
  </Button>
</div>
