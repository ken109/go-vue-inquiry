<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">編集</div>
          <div class="card-body">
              <div class="row">
                <label for="name" class="col-md-4 col-form-label text-md-right">名前</label>

                <div class="col-md-6">
                  <div id="name">{{ inquiry.name }}</div>
                </div>
              </div>

              <div class="row">
                <label for="mail" class="col-md-4 col-form-label text-md-right">メールアドレス</label>

                <div class="col-md-6">
                  <div id="mail">{{ inquiry.mail }}</div>
                </div>
              </div>

              <div class="row">
                <label for="message" class="col-md-4 col-form-label text-md-right">メッセージ</label>

                <div class="col-md-6">
                  <div id="message">{{ inquiry.message }}</div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Detail',
  data () {
    return {
      inquiry: {}
    }
  },
  mounted () {
    axios.get(this.api + '/inquiry/' + this.$route.params.id).then(response => {
      this.inquiry = response.data
    })
  }
}
</script>

<style scoped>
</style>
