webpackJsonp([7],{1030:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"CaseReview"},[e("div",{attrs:{id:"right"}},[t._m(0),t._v(" "),e("div",{staticClass:"search"},[e("div",{staticClass:"block",staticStyle:{"margin-top":"20px"}},[e("span",{staticClass:"demonstration"},[t._v("乡镇名称")]),t._v(" "),e("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.xiangzhenName,callback:function(a){t.xiangzhenName=a},expression:"xiangzhenName"}}),t._v(" "),e("span",{staticClass:"demonstration"},[t._v("巡查员姓名")]),t._v(" "),e("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{change:t.AddSelectName},model:{value:t.griderName,callback:function(a){t.griderName=a},expression:"griderName"}},t._l(t.griderOptions,function(t){return e("el-option",{key:t.value,attrs:{label:t.Name,value:t.Id}})})),t._v(" "),e("el-button",{staticClass:"btns",attrs:{type:"primary"},on:{click:t.GetMonitoringDay}},[t._v("查询")]),t._v(" "),e("el-button",{staticClass:"btns",attrs:{type:"primary"},on:{click:t.ExportStarExcel}},[t._v("导出")]),t._v(" "),e("el-button",{staticClass:"btns",attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("添加")])],1)]),t._v(" "),t._m(1),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.ListData,border:""}},[e("el-table-column",{attrs:{prop:"TownName",label:"所属乡镇",width:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"VillageName",label:"所属村庄",width:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"MemberName",label:"巡查员姓名",width:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"CreatedTime",label:"日期"}}),t._v(" "),e("el-table-column",{attrs:{prop:"Deeds",label:"事迹","show-overflow-tooltip":!0}}),t._v(" "),e("el-table-column",{attrs:{prop:"Bonus",label:"奖金"}}),t._v(" "),e("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[e("el-button",{staticClass:"eidt",attrs:{type:"text",size:"small"},on:{click:function(e){t.handleExamineClick(a.row)}}},[t._v("查看")])],1)]}}])})],1),t._v(" "),e("div",{staticClass:"page"},[e("span",{staticClass:"demonstration"},[t._v("共找到"+t._s(t.totalCount)+"条记录")]),t._v(" "),e("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":t.pageSize,layout:"prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),e("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"500px"},on:{"update:visible":function(a){t.dialogVisible=a}}},[e("div",{staticClass:"tanchuan-box"},[e("div",{staticClass:"block"},[e("span",[t._v("巡查员名称：")]),t._v(" "),e("el-select",{attrs:{placeholder:"请选择"},on:{change:t.AddSelect},model:{value:t.AddGriderName,callback:function(a){t.AddGriderName=a},expression:"AddGriderName"}},t._l(t.AddGriderOptions,function(t){return e("el-option",{key:t.value,attrs:{label:t.Name,value:t.Id}})}))],1),t._v(" "),e("div",{staticClass:"block"},[e("span",[t._v("奖金：")]),t._v(" "),e("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.Bonus,callback:function(a){t.Bonus=a},expression:"Bonus"}})],1),t._v(" "),e("div",{staticClass:"block kysay"},[e("span",[t._v("事迹：")]),t._v(" "),e("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.Deeds,callback:function(a){t.Deeds=a},expression:"Deeds"}})],1),t._v(" "),e("div",{staticClass:"block kysay"},[e("span",[t._v("备注：")]),t._v(" "),e("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.Remarks,callback:function(a){t.Remarks=a},expression:"Remarks"}})],1)]),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.AddOver}},[t._v("确 定")])],1)])],1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box"},[e("div",{staticClass:"warning"},[e("a",[t._v("明星巡查员")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box"},[e("div",{staticClass:"warning"},[e("a",[t._v("列表")])])])}]}},870:function(t,a,e){function i(t){e(983)}var n=e(1)(e(919),e(1030),i,"data-v-5692a838",null);t.exports=n.exports},919:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(103),n=(e.n(i),e(6));a.default={name:"CaseReview",data:function(){return{tableData:[],currentPage:1,pageSize:10,totalCount:1,InfoData:[],ListData:[],pageNo:1,dialogVisible:!1,xiangzhenName:"",Bonus:"",Deeds:"",Remarks:"",Reward:"",griderName:"",griderOptions:[],AddGriderName:"",AddGriderOptions:[],AddObj:{}}},created:function(){},mounted:function(){this.GetMonitoringDay(),this.GetGridName()},computed:{},methods:{handleAdd:function(){this.Bonus="",this.Deeds="",this.Remarks="",this.AddGriderName="",this.dialogVisible=!0},handleClose:function(t){this.$confirm("确认关闭？").then(function(a){t()}).catch(function(t){})},handleExamineClick:function(t){var a=this;a.dialogVisible=!0,console.log(t);var e=t.Id;n.a.GetStarmemberGridName(e).then(function(t){console.log(t.data),a.Bonus=t.data.Data.Bonus,a.Deeds=t.data.Data.Deeds,a.Remarks=t.data.Data.Remarks,a.AddGriderName=t.data.Data.GridMember})},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.pageNo=t,this.GetMonitoringDay()},GetGridName:function(){var t=this;n.a.GetStarGridName().then(function(a){console.log(a),t.griderOptions=a.data.Data,t.AddGriderOptions=a.data.Data})},GetMonitoringDay:function(){var t=this,a=t.xiangzhenName||"",e=t.AddObj.Name||"",i=t.pageSize,s=t.pageNo;t.ListData=[],n.a.GetStarList(a,e,1,s,i).then(function(a){if(console.log(a),a){var e=a.data.Data;t.totalCount=a.data.TotalRowsCount,e&&e.forEach(function(a){var e={};e.CreatedTime=a.CreatedTime.replace("T"," "),e.Deeds=a.Deeds,e.Bonus=a.Bonus,e.Id=a.Id,e.MemberName=a.MemberName,e.TownName=a.TownName,e.VillageName=a.VillageName,t.ListData.push(e)})}})},AddSelectName:function(t){this.AddObj={},this.AddObj=this.griderOptions.find(function(a){if(t===a.Id)return a}),console.log(this.AddObj)},AddSelect:function(t){console.log(t),this.AddObj={},this.AddObj=this.AddGriderOptions.find(function(a){return a.Id===t})},AddOver:function(){var t=this,a=t.AddObj.Id,e=t.Deeds,i=t.Bonus,s=t.Reward,o=t.Remarks;t.AddGriderName&&""!=t.Bonus?n.a.AddStarEvent(a,e,i,s,o).then(function(a){1===a.data.Status?(t.$message({showClose:!0,message:"添加成功",type:"success"}),t.GetMonitoringDay()):t.$message({showClose:!0,message:"添加失败",type:"error"}),t.dialogVisible=!1}):t.$message({message:"必填项不可为空",type:"warning"})},ExportStarExcel:function(){var t=this,a=t.xiangzhenName||"",e=t.AddObj.Name||"",i=t.pageSize,s=t.pageNo;n.a.ExcelOutPutMemberExcel(a,e,1,s,i)},setPageTable:function(t,a){for(var e=[],i=t*(a-1),n=0;n<t&&!(i+n+1>this.ListData.length);n++)e.push(this.ListData[i+n]);this.tableData=e}}}},940:function(t,a,e){a=t.exports=e(828)(!1),a.push([t.i,"[data-v-5692a838]{box-sizing:border-box}.el-input[data-v-5692a838],.el-input__inner[data-v-5692a838]{width:200px}.edit-input[data-v-5692a838]{width:100px}#right[data-v-5692a838]{width:100%;overflow:hidden;padding:20px;background-color:#f6fbff}#right .tanchuan-box[data-v-5692a838]{width:100%;height:auto}#right .tanchuan-box .block[data-v-5692a838]{width:96%;margin-top:15px;margin-left:-20px}#right .tanchuan-box .block span[data-v-5692a838]{display:inline-block;width:100px;text-align:right}#right .tanchuan-box .block .el-textarea[data-v-5692a838]{width:200px}#right .left[data-v-5692a838]{float:left}#right .box[data-v-5692a838]{width:100%;height:auto}#right .box .warning[data-v-5692a838]{text-align:left;border-bottom:1px solid #ccc;width:100%;height:40px;margin-top:10px;margin-bottom:20px;margin-left:10px}#right .box .warning a[data-v-5692a838]{display:inline-block;height:20px;border-left:3px solid #428bca;padding-left:13px;font-size:16px;line-height:20px}#right .search[data-v-5692a838]{margin-left:20px;text-align:left;margin-bottom:24px}#right .search .searchBox[data-v-5692a838]{display:inline-block;margin-right:20px}#right .search .block[data-v-5692a838]{display:inline-block}#right .search .btns[data-v-5692a838]{margin-left:40px}#right .search .InsertOrOut[data-v-5692a838]{display:inline-block;margin-left:40px}#right .search .InsertOrOut span a[data-v-5692a838]{color:#000;font-size:14px;margin-right:40px}#right .search .InsertOrOut span[data-v-5692a838] :hover{cursor:pointer;color:#1797ff;text-decoration:underline}#right .page[data-v-5692a838]{text-align:left}#right .el-pagination[data-v-5692a838]{display:inline-block;margin-left:170px;padding-bottom:90px}",""])},983:function(t,a,e){var i=e(940);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(829)("3d2437ec",i,!0,{})}});