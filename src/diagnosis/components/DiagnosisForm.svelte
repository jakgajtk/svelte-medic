<script>
    import { onMount, onDestroy } from "svelte";
    import Select from 'svelte-select'
    import Button, { Label } from '@smui/button'
    import Textfield, { Input } from '@smui/textfield'
    import Radio from '@smui/radio'
    import FormField from '@smui/form-field'

    import DiagnosisStore from '../store/store'
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
    ];

    onMount(async () => {
        await DiagnosisStore.getSymptoms($authToken);
    });

    let selectedSymptoms = [];
    let selectedGender;
    let selectedBirthYear = 1990;
    let submitDisabled;
    let options = [];

    $: submitDisabled = !selectedGender || !selectedSymptoms.length;
    $: options = $DiagnosisStore.symptoms.map((item) => {
        return ({
            label: item.Name,
            value: item.ID
        });
    });

    const handleSelect = ({ detail }) => {
        selectedSymptoms = detail
    };

    const handleDiagnosis = () => {
        const params = {
            symptoms: selectedSymptoms,
            yearOfBirth: selectedBirthYear,
            gender: selectedGender,
        }
        DiagnosisStore.getDiagnosis($authToken, params)
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
            items={options}
            bind:selectedSymptoms
            on:select={handleSelect}
            isMulti />
</div>

<div class="submit-container">
    <Button on:click={handleDiagnosis} variant="raised" disabled={submitDisabled}>
        <Label>Get Diagnosis</Label>
    </Button>
</div>