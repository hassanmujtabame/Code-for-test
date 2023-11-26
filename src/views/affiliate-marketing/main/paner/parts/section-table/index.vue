<template>
  <table class="styled-table">
    <thead>
      <tr>
        <th>كود البانر</th>
        <th> حجم البانر</th>
        <th>صوره البانر</th>
        <th>اسم البانر</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td dir="ltr" class="d-flex justify-content-center position-relative">
          <div style="width: 300px; height: 150px; border: 1px solid black;" v-html="escapeHTML(htmlCode)"></div>
          <span class="col-3 text-white position-absolute" style="
          height: 40px;
          width: 40px;
          border-radius : 5px; 
          box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125); 
          padding:10px; height:auto; display: flex; 
          justify-content: center; 
          align-items: center; 
          background-color: #2DB7B3;
          bottom: 20px;
          right: 15px;
          ">
            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.6689 2.0771L12.0346 0.442851C11.7511 0.1593 11.3665 2.09684e-06 10.9655 0L5.5439 0C4.70885 0 4.03193 0.676923 4.03193 1.51197V3.02395H1.51197C0.676923 3.02395 0 3.70087 0 4.53592V14.6157C0 15.4508 0.676923 16.1277 1.51197 16.1277H8.56785C9.4029 16.1277 10.0798 15.4508 10.0798 14.6157V13.1038H12.5998C13.4348 13.1038 14.1117 12.4268 14.1117 11.5918V3.14623C14.1117 2.74523 13.9524 2.36065 13.6689 2.0771ZM8.37885 14.6157H1.70097C1.65084 14.6157 1.60277 14.5958 1.56733 14.5604C1.53189 14.5249 1.51197 14.4769 1.51197 14.4267V4.72492C1.51197 4.67479 1.53189 4.62672 1.56733 4.59127C1.60277 4.55583 1.65084 4.53592 1.70097 4.53592H4.03193V11.5918C4.03193 12.4268 4.70885 13.1038 5.5439 13.1038H8.56785V14.4267C8.56785 14.4769 8.54794 14.5249 8.51249 14.5604C8.47705 14.5958 8.42898 14.6157 8.37885 14.6157ZM12.4108 11.5918H5.7329C5.68277 11.5918 5.6347 11.5719 5.59926 11.5364C5.56381 11.501 5.5439 11.4529 5.5439 11.4028V1.70097C5.5439 1.65084 5.56381 1.60277 5.59926 1.56733C5.6347 1.53189 5.68277 1.51197 5.7329 1.51197H9.07184V4.28392C9.07184 4.70145 9.4103 5.03991 9.82782 5.03991H12.5998V11.4028C12.5998 11.4529 12.5799 11.501 12.5444 11.5364C12.509 11.5719 12.4609 11.5918 12.4108 11.5918ZM12.5998 3.52794H10.5838V1.51197H10.8872C10.9373 1.51197 10.9854 1.53188 11.0209 1.56732L12.5444 3.09088C12.562 3.10843 12.5759 3.12927 12.5854 3.1522C12.5949 3.17514 12.5998 3.19971 12.5998 3.22453V3.52794Z"
                fill="currentColor" />
            </svg>

          </span>
        </td>
        <td style="color: #2DB7B3;" dir="ltr">300*172 px</td>
        <td><img src="@/assets/af-icons/Image.png" alt=""></td>
        <td>سوق رياديات</td>
      </tr>
      <tr>
        <td dir="ltr" class="d-flex justify-content-center position-relative">
          <div style="width: 300px; height: 150px; border: 1px solid black;" v-html="escapeHTML(htmlCode)"></div>
          <span class="col-3 text-white position-absolute" style="
          height: 40px;
          width: 40px;
          border-radius : 5px; 
          box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125); 
          padding:10px; height:auto; display: flex; 
          justify-content: center; 
          align-items: center; 
          background-color: #2DB7B3;
          bottom: 20px;
          right: 15px;
          ">
            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.6689 2.0771L12.0346 0.442851C11.7511 0.1593 11.3665 2.09684e-06 10.9655 0L5.5439 0C4.70885 0 4.03193 0.676923 4.03193 1.51197V3.02395H1.51197C0.676923 3.02395 0 3.70087 0 4.53592V14.6157C0 15.4508 0.676923 16.1277 1.51197 16.1277H8.56785C9.4029 16.1277 10.0798 15.4508 10.0798 14.6157V13.1038H12.5998C13.4348 13.1038 14.1117 12.4268 14.1117 11.5918V3.14623C14.1117 2.74523 13.9524 2.36065 13.6689 2.0771ZM8.37885 14.6157H1.70097C1.65084 14.6157 1.60277 14.5958 1.56733 14.5604C1.53189 14.5249 1.51197 14.4769 1.51197 14.4267V4.72492C1.51197 4.67479 1.53189 4.62672 1.56733 4.59127C1.60277 4.55583 1.65084 4.53592 1.70097 4.53592H4.03193V11.5918C4.03193 12.4268 4.70885 13.1038 5.5439 13.1038H8.56785V14.4267C8.56785 14.4769 8.54794 14.5249 8.51249 14.5604C8.47705 14.5958 8.42898 14.6157 8.37885 14.6157ZM12.4108 11.5918H5.7329C5.68277 11.5918 5.6347 11.5719 5.59926 11.5364C5.56381 11.501 5.5439 11.4529 5.5439 11.4028V1.70097C5.5439 1.65084 5.56381 1.60277 5.59926 1.56733C5.6347 1.53189 5.68277 1.51197 5.7329 1.51197H9.07184V4.28392C9.07184 4.70145 9.4103 5.03991 9.82782 5.03991H12.5998V11.4028C12.5998 11.4529 12.5799 11.501 12.5444 11.5364C12.509 11.5719 12.4609 11.5918 12.4108 11.5918ZM12.5998 3.52794H10.5838V1.51197H10.8872C10.9373 1.51197 10.9854 1.53188 11.0209 1.56732L12.5444 3.09088C12.562 3.10843 12.5759 3.12927 12.5854 3.1522C12.5949 3.17514 12.5998 3.19971 12.5998 3.22453V3.52794Z"
                fill="currentColor" />
            </svg>

          </span>
        </td>
        <td style="color: #2DB7B3;" dir="ltr">300*172 px</td>
        <td><img src="@/assets/af-icons/Image(1).png" alt=""></td>
        <td>سوق رياديات</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      htmlCode: `<a href='https://demo.riadiat.sa/ar/short'>
          <img src='smilley,gif' alt='smilley alt' 
          style='width:42px; height: 42px;'
          >
        </a>`
    };
  },
  methods: {
    escapeHTML(html) {
      return html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  }
};
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