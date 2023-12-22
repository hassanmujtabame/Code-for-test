<template>
  <table class="styled-table">
    <thead>
      <tr>
        <th>التاريخ و الوقت</th>
        <th>حاله الطلب</th>
        <th>بيانات الحساب </th>
        <th>نوع الحساب</th>
        <th>قيمه الطلب</th>
        <th>تاريخ الطلب</th>
        <th>رقم الطلب</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Jun 21,2023 10:30 am</td>
        <td>تم الدفع</td>
        <td>782343899</td>
        <td>حساب بنكى</td>
        <td>40 $</td>
        <td>Jun 23, 2023 12:19 pm</td>
        <td>4</td>
      </tr>

    </tbody>
  </table>
</template>

<script>
export default {
  props: ['deals']
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

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: #777;
  border-style: solid;
  border-width: 1px;
  border-right-color: transparent;
  border-left-color: transparent;
}
</style>