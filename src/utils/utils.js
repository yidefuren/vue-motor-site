/**
 * Created by lzy on 2018/5/27.
 */
export function goBack () {
  window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
}
