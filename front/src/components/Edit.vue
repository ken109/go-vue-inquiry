<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">編集</div>
          <div class="card-body">
            <form @submit.prevent="exec">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">名前</label>

                <div class="col-md-6">
                  <input id="name" type="text" class="form-control" v-model="name">
                </div>
              </div>

              <div class="form-group row">
                <label for="mail" class="col-md-4 col-form-label text-md-right">メールアドレス</label>

                <div class="col-md-6">
                  <input id="mail" type="text" class="form-control" v-model="mail">
                </div>
              </div>

              <div class="form-group row">
                <label for="message" class="col-md-4 col-form-label text-md-right">メッセージ</label>

                <div class="col-md-6">
                  <input id="message" type="text" class="form-control" v-model="message">
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    完了
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Edit',
  data () {
    return {
      name: '',
      mail: '',
      message: ''
    }
  },
  mounted () {
    axios.get(this.api + '/inquiry/' + this.$route.params.id).then(response => {
      this.name = response.data.name
      this.mail = response.data.mail
      this.message = response.data.message
    })
  },
  methods: {
    exec () {
      axios.put(this.api + '/inquiry/' + this.$route.params.id, null, {
        params: {
          name: this.name,
          mail: this.mail,
          message: this.message
        }
      }).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style scoped>
</style>
