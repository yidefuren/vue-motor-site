<template>
  <div>
    <detail-header></detail-header>
    <post></post>
  </div>
</template>
<script>
import DetailHeader from './components/Pheader'
import Post from './components/Post'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    Post
  },
  data () {
    return {
      sightName: '',
      list: []
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.list = data.categoryList
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
