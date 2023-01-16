<template>
<div id="list-item-5">
                <div class="box border mt-5 ">
                    <h3 class="border-bottom py-2 t-c px-3">
                        معلومات الاقامة 
                    </h3>
                    <ValidationObserver ref="form">
                        <div class=" p-3">
                            <div class="row  align-items-start">
                                <label class="col-md-3 m-c fs-5 fw-bolder">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9999 14.1704C9.86988 14.1704 8.12988 12.4404 8.12988 10.3004C8.12988 8.16043 9.86988 6.44043 11.9999 6.44043C14.1299 6.44043 15.8699 8.17043 15.8699 10.3104C15.8699 12.4504 14.1299 14.1704 11.9999 14.1704ZM11.9999 7.94043C10.6999 7.94043 9.62988 9.00043 9.62988 10.3104C9.62988 11.6204 10.6899 12.6804 11.9999 12.6804C13.3099 12.6804 14.3699 11.6204 14.3699 10.3104C14.3699 9.00043 13.2999 7.94043 11.9999 7.94043Z" fill="#1FB9B3"/>
                                        <path d="M12.0002 22.76C10.5202 22.76 9.03018 22.2 7.87018 21.09C4.92018 18.25 1.66018 13.72 2.89018 8.33C4.00018 3.44 8.27018 1.25 12.0002 1.25C12.0002 1.25 12.0002 1.25 12.0102 1.25C15.7402 1.25 20.0102 3.44 21.1202 8.34C22.3402 13.73 19.0802 18.25 16.1302 21.09C14.9702 22.2 13.4802 22.76 12.0002 22.76ZM12.0002 2.75C9.09018 2.75 5.35018 4.3 4.36018 8.66C3.28018 13.37 6.24018 17.43 8.92018 20C10.6502 21.67 13.3602 21.67 15.0902 20C17.7602 17.43 20.7202 13.37 19.6602 8.66C18.6602 4.3 14.9102 2.75 12.0002 2.75Z" fill="#1FB9B3"/>
                                        </svg>
                                        {{ $t('Country') }} :
                                </label>
                                <div class="col-md-9 row">
                                    <div class="w-100 ">
                                        <ValidationProvider 
                                        :name="$t('Country')"
                                        vid="country_id"
                                        rules="required"
                                        v-slot="{errors}"
                                        >
                                        <div class="  position-relative mb-3 ">
                                            <select v-model="itemForm.country_id" class="form-control p-2" >
                                                <option value="" class="t-c " disabled selected>{{ $t('select_country') }}</option>
                                                <option v-for="(country,i) in countries" :key="i" :value="country.id">{{ country.name}} </option>
                                            </select>
                                            <div style="top: 7px;left: 10px;" class="position-absolute">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z" fill="#737373"/>
                                                    </svg> 
                                            </div>
                                        </div>
                                        <d-error-input :error="errors" v-if="errors.length" />
                                    </ValidationProvider>
                                    </div>
                                </div>
                             </div>
                             <div class="row align-items-start ">
                                    <label class="col-md-3 m-c fs-5 fw-bolder">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.3799 21.13C20.1799 21.13 19.9899 21.05 19.8499 20.91L13.4699 14.53C13.1799 14.24 13.1799 13.76 13.4699 13.47L21.2 5.74001C21.39 5.55001 21.6799 5.48001 21.9399 5.55001C22.1999 5.63001 22.3999 5.84001 22.4599 6.10001C22.6499 6.95001 22.7499 7.90001 22.7499 9.00001V15C22.7499 17.77 22.1699 19.64 20.9099 20.91C20.7699 21.05 20.5599 21.08 20.3799 21.13ZM15.0599 14L20.3199 19.26C20.9499 18.29 21.2499 16.91 21.2499 15V9.00001C21.2499 8.59001 21.2399 8.21001 21.2099 7.85001L15.0599 14Z" fill="#1FB9B3"/>
                                            <path d="M6.26999 22.48C6.20999 22.48 6.16001 22.47 6.10001 22.46C2.79001 21.7 1.25 19.33 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C19.33 1.25 21.7 2.79001 22.46 6.10001C22.52 6.35001 22.44 6.62 22.26 6.8L6.79999 22.26C6.65999 22.4 6.46999 22.48 6.26999 22.48ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 18.47 3.71001 20.21 6.04001 20.9L20.89 6.05C20.21 3.72 18.46 2.75999 14.99 2.75999H9V2.75Z" fill="#1FB9B3"/>
                                            <path d="M14.9999 22.7504H8.99989C7.89989 22.7504 6.95989 22.6604 6.09989 22.4604C5.82989 22.4004 5.61987 22.2004 5.54987 21.9404C5.46987 21.6804 5.54988 21.4004 5.73988 21.2004L13.4699 13.4704C13.7599 13.1804 14.2399 13.1804 14.5299 13.4704L20.9099 19.8504C21.0499 19.9904 21.1299 20.1804 21.1299 20.3804C21.1299 20.5804 21.0499 20.7704 20.9099 20.9104C19.6399 22.1704 17.7699 22.7504 14.9999 22.7504ZM7.84989 21.2104C8.20989 21.2404 8.58989 21.2504 8.99989 21.2504H14.9999C16.9199 21.2504 18.2899 20.9504 19.2599 20.3204L13.9999 15.0604L7.84989 21.2104Z" fill="#1FB9B3"/>
                                            <path d="M9.11994 13.31C8.48994 13.31 7.85993 13.08 7.35993 12.61C5.76993 11.1 5.12996 9.44005 5.50996 7.82005C5.88996 6.16005 7.33994 5.04004 9.11994 5.04004C10.8999 5.04004 12.35 6.16005 12.73 7.82005C13.1 9.45005 12.4599 11.1 10.8699 12.61C10.3799 13.07 9.74994 13.31 9.11994 13.31ZM6.96995 8.15004C6.64995 9.51004 7.56994 10.7301 8.39994 11.5201C8.80994 11.91 9.43994 11.91 9.83994 11.5201C10.6599 10.7401 11.5799 9.52004 11.2699 8.15004C10.9999 6.96004 9.93994 6.53004 9.11994 6.53004C8.29994 6.53004 7.24995 6.96004 6.96995 8.15004Z" fill="#1FB9B3"/>
                                            <path d="M9.1499 9.49023C8.5999 9.49023 8.1499 9.04023 8.1499 8.49023C8.1499 7.94023 8.5899 7.49023 9.1499 7.49023H9.15991C9.70991 7.49023 10.1599 7.94023 10.1599 8.49023C10.1599 9.04023 9.6999 9.49023 9.1499 9.49023Z" fill="#1FB9B3"/>
                                            </svg>
                                            
                                            
                                            
                                            
                                            {{ $t('Region') }}  :

                                    </label>
                                    <div class="col-md-9 row mb-3 ">
                                    
                                        <ValidationProvider 
                                        :name="$t('Region')"
                                        vid="region"
                                        rules="required"
                                        v-slot="{errors}"
                                        >
                                                <input type="text" v-model="itemForm.region" class="form-control" :placeholder="$t('write_region_name')">
                                                <d-error-input :error="errors" v-if="errors.length" />
                                    </ValidationProvider>
                                  
                                    </div>
                                

                                </div>
                             <div class="row  align-items-start">
                                <label class="col-md-3 m-c fs-5 fw-bolder">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 20.25C7.45 20.25 3.75 16.55 3.75 12C3.75 7.45 7.45 3.75 12 3.75C16.55 3.75 20.25 7.45 20.25 12C20.25 16.55 16.55 20.25 12 20.25ZM12 5.25C8.28 5.25 5.25 8.28 5.25 12C5.25 15.72 8.28 18.75 12 18.75C15.72 18.75 18.75 15.72 18.75 12C18.75 8.28 15.72 5.25 12 5.25Z" fill="#1FB9B3"/>
                                        <path d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z" fill="#1FB9B3"/>
                                        <path d="M12 4.75C11.59 4.75 11.25 4.41 11.25 4V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V4C12.75 4.41 12.41 4.75 12 4.75Z" fill="#1FB9B3"/>
                                        <path d="M4 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H4C4.41 11.25 4.75 11.59 4.75 12C4.75 12.41 4.41 12.75 4 12.75Z" fill="#1FB9B3"/>
                                        <path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V20C11.25 19.59 11.59 19.25 12 19.25C12.41 19.25 12.75 19.59 12.75 20V22C12.75 22.41 12.41 22.75 12 22.75Z" fill="#1FB9B3"/>
                                        <path d="M22 12.75H20C19.59 12.75 19.25 12.41 19.25 12C19.25 11.59 19.59 11.25 20 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z" fill="#1FB9B3"/>
                                        </svg>
                                        {{$t('City')}}  :
                                </label>
                                <div class="col-md-9 row mb-3">
                                    <ValidationProvider 
                                        :name="$t('City')"
                                        vid="city"
                                        rules="required"
                                        v-slot="{errors}"
                                        >
                                                <input type="text" v-model="itemForm.city" class="form-control" :placeholder="$t('write_city_name')">
                                                <d-error-input :error="errors" v-if="errors.length" />
                                    </ValidationProvider>
                                </div>
                             </div>
                                
                                
                                <div class="row align-items-start ">
                                    <label class="col-md-3 m-c fs-5 fw-bolder">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V20C11.25 19.59 11.59 19.25 12 19.25C12.41 19.25 12.75 19.59 12.75 20V22C12.75 22.41 12.41 22.75 12 22.75Z" fill="#1FB9B3"/>
                                            <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V16C11.25 15.59 11.59 15.25 12 15.25C12.41 15.25 12.75 15.59 12.75 16V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="#1FB9B3"/>
                                            <path d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V11C11.25 6.73 14.73 3.25 19 3.25H22C22.41 3.25 22.75 3.59 22.75 4C22.75 4.41 22.41 4.75 22 4.75H19C15.55 4.75 12.75 7.55 12.75 11V14C12.75 14.41 12.41 14.75 12 14.75Z" fill="#1FB9B3"/>
                                            <path d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V11C11.25 7.55 8.45 4.75 5 4.75H2C1.59 4.75 1.25 4.41 1.25 4C1.25 3.59 1.59 3.25 2 3.25H5C9.27 3.25 12.75 6.73 12.75 11V14C12.75 14.41 12.41 14.75 12 14.75Z" fill="#1FB9B3"/>
                                            <path d="M3.99997 6.75043C3.80997 6.75043 3.61994 6.68043 3.46994 6.53043L1.46994 4.53043C1.17994 4.24043 1.17994 3.76043 1.46994 3.47043L3.46994 1.47043C3.75994 1.18043 4.24 1.18043 4.53 1.47043C4.82 1.76043 4.82 2.24043 4.53 2.53043L3.05997 4.00043L4.53 5.47043C4.82 5.76043 4.82 6.24043 4.53 6.53043C4.38 6.68043 4.18997 6.75043 3.99997 6.75043Z" fill="#1FB9B3"/>
                                            <path d="M20 6.75043C19.81 6.75043 19.6199 6.68043 19.4699 6.53043C19.1799 6.24043 19.1799 5.76043 19.4699 5.47043L20.94 4.00043L19.4699 2.53043C19.1799 2.24043 19.1799 1.76043 19.4699 1.47043C19.7599 1.18043 20.24 1.18043 20.53 1.47043L22.53 3.47043C22.82 3.76043 22.82 4.24043 22.53 4.53043L20.53 6.53043C20.38 6.68043 20.19 6.75043 20 6.75043Z" fill="#1FB9B3"/>
                                            </svg>
                                            {{ $t('Street') }}  :
                                    </label>
                                    <div class="col-md-9 row mb-3 ">
                                    
                                        <ValidationProvider 
                                        :name="$t('Street')"
                                        vid="street"
                                        rules="required"
                                        v-slot="{errors}"
                                        >
                                                <input type="text" v-model="itemForm.street" class="form-control" :placeholder="$t('write_street_name')">
                                                <d-error-input :error="errors" v-if="errors.length" />
                                    </ValidationProvider>
                                  
                                    </div>
                                

                                </div>
                        </div>
                    </ValidationObserver>
                    <div class="m-auto text-center p-3">
                        <button @click="save" class="btn-main">
                            {{$t('save')}}
                        </button>
                    </div>
               </div>   
            </div>  
</template>

<script>
import userAPI from '@/services/api/user.js'
export default {
 name:'residence-item',
 props:['currentUser'],
 data:(vm)=>{
    return {
        countries:[],
        cities:[],
        itemForm:{
            country_id:null,
            region:null,
            city:null,
            street:null,
            ...vm.currentUser.residence_informations
        }
    
    }
 },
 methods:{
    async save(evt){
            if(evt) evt.preventDefault();
            let valid = await this.$refs.form.validate();
            if(!valid){
                console.log('form invalid')
                return;
            }
             let formData =  new FormData();
             Object.keys(this.itemForm).forEach(key=>{
                formData.append(`${key}`,this.itemForm[key])
             })
             
            try {
                let {data} = await userAPI.postResidenceInformation(formData)
                if(data.success){
                    window.SwalSuccess(data.message)
                }else{
                    window.SwalError(data.message)
                }
            } catch (error) {
                console.log('error',error)
                if(error.response){
                    if(error.response.status == 422){
                        this.$refs.form.setErrors(error.response.data)
                    }
                }
                
            }
    },
    async loadCountries(){
        try{
            let {data } = await userAPI.getCountries()
            if(data.success){
                this.countries = data.data
            }
        }catch(error){
            this.countries = [
            {id:'sa',name:'السعودية'}
        ]
        }
    }
 },
 mounted(){
    this.loadCountries()
 }
}
</script>

<style>

</style>