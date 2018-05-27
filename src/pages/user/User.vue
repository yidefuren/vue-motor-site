<template>
  <div style="background-color: #ebeced">
    <user-header></user-header>
    <user-money></user-money>
    <user-order></user-order>
    <user-footer></user-footer>
  </div>
</template>
<script>
import UserHeader from './components/Header'
import UserMoney from './components/Money'
import UserOrder from './components/Order'
import UserFooter from './components/Footer'
export default {
  name: 'User',
  components: {
    UserHeader,
    UserMoney,
    UserOrder,
    UserFooter
  }
}
</script>
