<template>
    <table class="styled-table">
        <thead>
          <tr>
            <th>التاريخ و الوقت</th>
            <th>ايميل الزائر</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(visit, i) in visits" :key="i">
            <td>{{ visit.created_at }}</td>
            <td>{{ visit.user.email }}</td>
          </tr>
        </tbody>
      </table>
</template>

<script>
export default {
  props: ['visits']
}
</script>

<style scoped>
.styled-table {
    width: 100%;
    font-family: Arial, sans-serif;
  }
  
  .styled-table thead th {
    color: #2DB7B3;
    font-weight: bold;
    text-align: center;
    padding: 30px 12px;
  }
  
  .styled-table tbody td {
    text-align: center;
    padding: 16px 8px;
  }

  thead, tbody, tfoot, tr, td, th {
    border-color: #777;
    border-style: solid;
    border-width: 1px;
    border-right-color: transparent;
    border-left-color: transparent;
}
</style>