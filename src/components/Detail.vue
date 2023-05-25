<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { requestUrlParam1 } from '../router';
const imgUrl = new URL('../img/comicimg', import.meta.url).href
const id = requestUrlParam1();
console.log(id)
const comicinfo=ref([])
const bid =ref(0)
const bname =ref('')
const bsrcname =ref('')
const binfo =ref('') 
const bmaxno =ref(0)
const bcategory =ref('')
const bauthor = ref(0)
const bnos=ref([])
const request1 = axios.create({
  baseURL: '/api',
  timeout:1000
})
// request1({
//     method: 'POST',
//     url: '/comicId',
//     params: {
//         comicid:id
//     }
axios({
  method: 'GET',
  url: 'http://localhost:3000/comic',
  params: {
    bid: id
  }
  }).then((res => {
    console.log(res.data)
    //  comicinfo.value.push(res.data)
    //  console.log(comicinfo.value)
    //   bid.value=comicinfo.value[0].bid
    //   bname.value=comicinfo.value[0].bname
    //   bmaxno.value=comicinfo.value[0].bmaxno
    //   binfo.value=comicinfo.value[0].binfo
    //   bsrcname.value=comicinfo.value[0].bsrcname
    //   bcategory.value=comicinfo.value[0].bcategory
    //   bauthor.value=comicinfo.value[0].bauthor
    bid.value = res.data[0].bid
    bname.value = res.data[0].bname
    bsrcname.value = res.data[0].bsrcname
    binfo.value = res.data[0].binfo
    bmaxno.value = res.data[0].bmaxno
    bcategory.value = res.data[0].bcategory
    bauthor.value = res.data[0].bauthor
    bnos.value = res.data[0].no
    console.log(bnos.value)
  }))
</script>
<template>
  <div class="comicBg">
  <div class="comicBlock">
    <div class="comicImg">
      <el-image :src="imgUrl+'/'+bsrcname+'.jpg'"
        style="width: auto; height: auto; max-width: 100%;
              max-height: 100%;"
        :zoom-rate="1.2"
        :preview-src-list="[imgUrl]"
        :initial-index="1"
        fit="contain" 
        />
    </div>
    <div class="comicdeCon">
      <h1 class="comicTitle">{{bname}}</h1>
      <p class="comicInfo">{{bauthor}}</p>
      <p class="comicInfo">{{bcategory}}</p>
      <p class="comicInfo">{{bmaxno}}</p>
       <div class="dashed"></div>
        <p class="comicdetail">{{binfo}}</p>
       </div>
    </div>

    <div class="comicno">
        <el-row :gutter="20" >
            <el-col :span="6" v-for="item in bnos">
              <a class="comicChapter" href="">{{item.noname}}</a>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<style>
.el-col{
  margin-bottom: 20px;
}
.comicChapter{
  color: #E6E8EB;
  font-size:14px;
}
.image-slot{
   font-size: 30px;
}
.comicno{
  width: 700px;
  margin-left: 15%;
  box-shadow: -1px 7px 22px #b4b3b3;
  text-align: center;
}
.comicBlock{
  height: 360px;
  width: 100%;
  display: flex;
}
.comicdetail{
  height: 100px;
  width:340px;
  color: #b4b3b3;
  font-size: 13px;
}
.dashed{
  margin-top: 5%;
  border-top: 2px dashed var(--el-border-color);
  width: 50px;
  margin-bottom: 3%;
}
.comicInfo{
  color: #E6E8EB;
  font-size:14px;
  margin-bottom: 3%;
}
.comicImg{
  margin-left: 20%;
  height: 266px;
  width: 199px;
  box-shadow:-1px 7px 22px #b4b3b3;
}
.comicTitle{
 font-size:28px;
  color:   #E6E8EB;
  margin-bottom: 10%;
}
.comicdeCon{
  margin-left: 5%;
  width: 300px;
  height: auto;
}
.comicBg{
  height: auto;
  background-image: url('../img/主页背景图片二.jpg');
  background-size: 100% 100%;
  background-attachment: fixed;
}

.el-main {
  overflow: visible !important;
  padding: 0 !important;
}
</style>