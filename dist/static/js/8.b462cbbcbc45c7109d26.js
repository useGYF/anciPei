webpackJsonp([8],{1017:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"CaseReview"},[a("div",{attrs:{id:"right"}},[t._m(0),t._v(" "),a("div",{staticClass:"search"},[a("div",{staticClass:"block",staticStyle:{width:"100%","margin-top":"20px"}},[a("span",{staticClass:"demonstration"},[t._v("乡镇名称")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.villageName,callback:function(e){t.villageName=e},expression:"villageName"}}),t._v(" "),a("span",{staticClass:"demonstration"},[t._v("巡查员姓名")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.patrollerName,callback:function(e){t.patrollerName=e},expression:"patrollerName"}})],1),t._v(" "),a("div",{staticClass:"block",staticStyle:{"margin-top":"20px"}},[a("span",{staticClass:"demonstration"},[t._v("起始时间")]),t._v(" "),a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期时间"},on:{change:t.startChange},model:{value:t.CaseStartTime,callback:function(e){t.CaseStartTime=e},expression:"CaseStartTime"}}),t._v("\n\t\t\t\t\t    -\n\t\t\t\t\t    "),a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期时间"},on:{change:t.endChange},model:{value:t.CaseEndTime,callback:function(e){t.CaseEndTime=e},expression:"CaseEndTime"}}),t._v(" "),a("el-button",{staticClass:"btns",attrs:{type:"primary"},on:{click:t.GetMonitoringDay}},[t._v("查询")]),t._v(" "),a("el-button",{staticClass:"btns",attrs:{type:"primary"},on:{click:t.GetExportCase}},[t._v("导出")])],1)]),t._v(" "),t._m(1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.ListData,border:""}},[a("el-table-column",{attrs:{prop:"TownName",label:"所属乡镇"}}),t._v(" "),a("el-table-column",{attrs:{prop:"VillageName",label:"所属村庄"}}),t._v(" "),a("el-table-column",{attrs:{prop:"MemberName",label:"巡查员姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Mobile",label:"联系方式"}}),t._v(" "),a("el-table-column",{attrs:{prop:"CheckIn",label:"签到时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Checkout",label:"签退时间"}})],1),t._v(" "),a("div",{staticClass:"page"},[a("span",{staticClass:"demonstration"},[t._v("共找到"+t._s(t.totalCount)+"条记录")]),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":t.pagesize,layout:"prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"warning"},[a("a",[t._v("签到统计")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"warning"},[a("a",[t._v("列表")])])])}]}},869:function(t,e,a){function i(t){a(970)}var n=a(1)(a(918),a(1017),i,"data-v-2370e81b",null);t.exports=n.exports},918:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(103),n=(a.n(i),a(6));e.default={name:"CaseReview",data:function(){return{tableData:[],currentPage:1,pagesize:10,TotalRowsCount:null,totalCount:1,InfoData:[],ListData:[],pageNo:1,CaseStartTime:"",CaseEndTime:"",villageName:"",patrollerName:""}},created:function(){},mounted:function(){this.GetMonitoringDay()},computed:{},methods:{startChange:function(t){this.startTime=t},endChange:function(t){this.endTime=t},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.pageNo=t,this.GetMonitoringDay()},GetMonitoringDay:function(){var t=this,e=encodeURI(this.villageName),a=encodeURI(this.patrollerName),i=this.CaseStartTime?this.CaseStartTime:"",l=this.CaseEndTime?this.CaseEndTime:"",o=this.pageNo;this.ListData=[],n.a.GetStaff(e,a,i,l,o,10).then(function(e){if(console.log(e),e){var a=e.data.Data;t.totalCount=e.data.TotalRowsCount,a&&a.forEach(function(e){var a={};a.Checkout=e.Checkout||"--",a.CheckIn=e.CheckIn||"--",a.MemberName=e.MemberName||"--",a.Mobile=e.Mobile||"--",a.TownName=e.TownName||"--",a.VillageName=e.VillageName||"--",t.ListData.push(a)})}})},GetExportCase:function(){var t=this,e=encodeURI(t.villageName),a=encodeURI(t.patrollerName),i=t.CaseStartTime?t.CaseStartTime:"",l=t.CaseEndTime?t.CaseEndTime:"",o=t.pageNo;n.a.StaffExcelOutPut(e,a,i,l,o,10)},handleRemove:function(t,e){console.log(t,e)},handlePreview:function(t){console.log(t)}}}},927:function(t,e,a){e=t.exports=a(828)(!1),e.push([t.i,"[data-v-2370e81b]{box-sizing:border-box}.img-list[data-v-2370e81b]{overflow:hidden;width:100%}.img-list .img-content[data-v-2370e81b]{float:left;text-align:left;position:relative;display:inline-block;width:200px;height:200px;border:1px solid #d1dbe5}.img-list .img-upload[data-v-2370e81b]{float:left;width:200px;height:200px;display:table;text-align:center}.img-list .uploader[data-v-2370e81b]{width:100%;display:table-cell;vertical-align:middle}.img-list .img-progress[data-v-2370e81b]{text-align:center;padding-top:30px}.img-list .img-content img[data-v-2370e81b]{display:block;width:100%;height:200px;margin:0 auto}.img-list .img-content .name[data-v-2370e81b]{margin-top:10px}.img-list .img-content .name>div[data-v-2370e81b]{width:90%;text-overflow:ellipsis;overflow:hidden;height:25px;line-height:25px}.img-list .img-content:hover .del[data-v-2370e81b],.img-list .img-content:hover .layer[data-v-2370e81b]{opacity:1}.img-list .img-content .del[data-v-2370e81b],.img-list .img-content .layer[data-v-2370e81b]{opacity:0;transition:all .3s}.img-list .img-content .del[data-v-2370e81b]{position:absolute;bottom:10px;right:10px;color:#8492a6;cursor:pointer;font-size:1.1em}.img-list .img-content .layer[data-v-2370e81b]{position:absolute;left:0;right:0;top:0;height:200px;color:#fff;text-align:center;z-index:5;background-color:rgba(0,0,0,.4)}.img-list .img-content .layer i[data-v-2370e81b]{font-size:1.6em;margin-top:80px}.el-input[data-v-2370e81b],.el-input__inner[data-v-2370e81b]{width:200px}.edit-input[data-v-2370e81b]{width:100px}#right[data-v-2370e81b]{width:100%;overflow:hidden;padding:20px;background-color:#f6fbff}#right .left[data-v-2370e81b]{float:left}#right .box[data-v-2370e81b]{width:100%;height:auto}#right .box .warning[data-v-2370e81b]{text-align:left;border-bottom:1px solid #ccc;width:100%;height:40px;margin-top:10px;margin-bottom:20px;margin-left:10px}#right .box .warning a[data-v-2370e81b]{display:inline-block;height:20px;border-left:3px solid #428bca;padding-left:13px;font-size:16px;line-height:20px}#right .search[data-v-2370e81b]{margin-left:20px;text-align:left;margin-bottom:24px}#right .search .searchBox[data-v-2370e81b]{display:inline-block;margin-right:20px}#right .search .block[data-v-2370e81b]{display:inline-block}#right .search .btns[data-v-2370e81b]{margin-left:40px}#right .search .InsertOrOut[data-v-2370e81b]{display:inline-block;margin-left:40px}#right .search .InsertOrOut span a[data-v-2370e81b]{color:#000;font-size:14px;margin-right:40px}#right .search .InsertOrOut span[data-v-2370e81b] :hover{cursor:pointer;color:#1797ff;text-decoration:underline}#right .page[data-v-2370e81b]{text-align:left}#right .el-pagination[data-v-2370e81b]{display:inline-block;margin-left:170px;padding-bottom:90px}",""])},970:function(t,e,a){var i=a(927);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(829)("13ee6900",i,!0,{})}});