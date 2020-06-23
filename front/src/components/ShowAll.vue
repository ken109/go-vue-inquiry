<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">一覧</div>
          <div class="card-body">
            <table class="table">
              <tr>
                <th>ID</th>
                <th>名前</th>
                <th>メール</th>
                <th>メッセージ</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr v-for="(inquiry, key) in inquiries" :key="key">
                <td>{{ inquiry.id }}</td>
                <td>{{ inquiry.name }}</td>
                <td>{{ inquiry.mail }}</td>
                <td>{{ inquiry.message }}</td>
                <td>
                  <router-link :to="/detail/ + inquiry.id" class="btn btn-primary" role="button">詳細</router-link>
                </td>
                <td>
                  <router-link :to="/edit/ + inquiry.id" class="btn btn-secondary" role="button">編集</router-link>
                </td>
                <td><button class="btn btn-danger" @click.prevent="deleteById(inquiry.id)">削除</button></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ShowAll',
  data () {
    return {
      inquiries: []
    }
  },
  mounted () {
    axios.get(this.api + '/inquiry').then(response => {
      this.inquiries = response.data
    })
  },
  methods: {
    deleteById (id) {
      axios.delete(this.api + '/inquiry/' + id).then(() => {
        axios.get(this.api + '/inquiry').then(response => {
          this.inquiries = response.data
        })
      })
    }
  }
}
</script>

<style scoped>
</style>
