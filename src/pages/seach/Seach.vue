<template>
  <div>
    <seach-header></seach-header>
    <seach-history></seach-history>
    <seach-suggest></seach-suggest>
  </div>
</template>

<script>
import SeachHeader from './components/Header'
import SeachSuggest from './components/Suggest'
import SeachHistory from './components/History'
export default {
  components: {
    SeachHeader,
    SeachSuggest,
    SeachHistory
  }
}
</script>
