<template>
    <div class="Paneldataindex">
        <!--首页面板-->
        <div id="list">
            <div class="gensui">
                <div class="line_top">
                    <toolbar>
                        <map-handle slot="toors"></map-handle>
                    </toolbar>
                </div>
                <!---->
            </div>
            <div class="panel">
                <!--面板切换视图区域-->
                <router-view></router-view>
                <!---->
            </div>
            <!--右侧菜单-->
            <div class="meun_right">
                <ul>
                    <!--默认选项-->
                    <li @click="selectRightNavData('统计')" :class="isSelect === '统计' ? 'backgroundColor' : ''">
                            <img :src="Jtimgurl">
                    </li>
                    <!--动态生成-->
                    <li v-for="item in RightNavData" @click="selectRightNavData(item.title)" :class="isSelect === item.title ? 'backgroundColor' : ''">
                       <!---->
                        <el-tooltip class="item" effect="dark" :content="item.title_tx" placement="left">
                            <img :src="isSelect === item.title ? item.url_one : item.url">
                        </el-tooltip>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {bus} from '@/js/bus.js'
    import api from '../api/index'
    //页面图例组件
    import Toolbar from '@/components/Toolbar'

    export default {
        name: 'paneldata',
        data() {
            return {
                //图例默认展开
                imgtuli:true,
                //默认图例
                imgkey:'../../static/imgs/indeximgs/tuli/fd-suoxiao.png',
                //图例缩小
                imgkeyss:'../../static/imgs/indeximgs/tuli/fd-suoxiao.png',
                //图例展开
                imgkeyzk:'../../static/imgs/indeximgs/tuli/fd-zhankai.png',
                //收缩右侧面板
                zuo: false,
                //默认展开右侧面板
                you: true,
                //
                table: false,
                //
                tongji: true,
                //图例开关
                Legendswtch:true,
                //
                activeName: 'first',
                //风向
                windDirection:false,
                //
                tableData: [],
                //
                Statistics: {},
                //传感器
                AirPie: [],
                //视频
                VideoPie: [],
                //网格类
                GridPie: [],
                //网格员
                GridMemberPie: [],
                //右侧栏统计2
                RightStatistics: {},
                //默认面板值
                isSelect: '国省',
                //
                Jtimgurl:'static/imgs/indeximgs/morenimg/shenshou.png',
                //右侧菜单栏项目
                RightNavData: []

            }
        },
        activated() {},
        mounted() {
            //
            api.GetXhHbPoints().then(res => {let data = res.data.Data;this.Statistics = data;})
            api.GetOfficeProgess().then(res => {let data = res.data.Data;this.RightStatistics = data;})
            //分类切换模块
            $('.first .tables a').on('click', function () {$(this).addClass('bai').siblings().removeClass('bai')})
            //根源菜单赋值
            this.RightNavData = this.$store.state.menuData;
            //
            bus.$on('menuative', this.selectRightNavData);//
            //
            this.ExtendRightPanel();
        },
        updated(){
            //跟新数据后调用功能
            if(this.RightNavData == false){
                this.isSelect = '统计';
                this.ExtendRightPanel();
            }

        },
        computed:{

        },
        watch:{
            //监听路由
            '$route':'isTabChange',
        },
        methods: {

            //路由监控
            isTabChange(){
                //当返回实时监控页面时候监控路由情况
                if(this.$route.path==='/'){
                    this.isSelect = '统计';
                }
            },
            //排序
            compare(propertyName) {
                return function (object1, object2) {
                    let value1 = object1[propertyName]
                    let value2 = object2[propertyName]
                    return value2 - value1
                }
            },
            //动画001伸出
            ExtendRightPanel(){
                $('#list')[0].style.transition = 'all 50ms';
                $('#list')[0].style.WebkitTransform = "translate(467px)";
                $('#list')[0].style.transform = "translate(467px)";
                $('.meun_right')[0].style.right = '467px';
                $('.line_top')[0].style.left = '-480px';
            },
            //动画002收回
            RecoverRightPanel(){
                $('#list')[0].style.transition = 'all 500ms';
                $('#list')[0].style.transform = "translate(0)";
                $('.meun_right')[0].style.right = '0px';
                $('.line_top')[0].style.left = '-455px';
            },
            //table点击事件
            RowCurrentChange(val) {},
            //渲染
            switchRender(type) {
                this.type = type;
                this.labelType = this.getPollutionTarget(type);

            },
            //
            getPollution(type) {
                let rtValue = type;
                switch (type.toUpperCase()) {
                    case 'PM2.5':
                        rtValue = 'pm25';
                        break;
                    case 'INDEX':
                        rtValue = 'complexindex';
                        break;
                    case 'WS':
                        rtValue = 'windspeed';
                        break;
                    case 'WD':
                        rtValue = 'windangle';
                        break;
                }
                return rtValue;
            },
            //右侧切换菜单栏
            selectRightNavData (title) {
                this.isSelect = title;
                //console.log(title)
                switch (title) {
                    case '统计':
                        this.$router.push('/');
                        this.ExtendRightPanel();
                        break
                    case '国省':
                        this.$router.push('/MonitoringPoint');
                        this.RecoverRightPanel();
                        break
                    case '六参':
                        this.$router.push('/SenPanel');
                        this.RecoverRightPanel();
                        break
                    case '乡镇':
                        this.$router.push('/TownshipPanel');
                        this.RecoverRightPanel();
                        break
                    case '工地':
                        this.$router.push('/OnlineListPanel');
                        this.RecoverRightPanel();
                        break
                    case '企业':
                        this.$router.push('/EnterprisePanel');
                        this.RecoverRightPanel();
                        break
                    case '餐饮':
                        this.$router.push('/CookingFumeMonitoring');
                        this.RecoverRightPanel();
                        break
                    case '督查案件':
                        this.$router.push('/CaseSupervision');
                        this.RecoverRightPanel();
                        break
                    case 'VOC':
                        this.$router.push('/tvocPanel');
                        this.RecoverRightPanel();
                        break
                    case '散乱视频':
                        this.$router.push('/ScatteredDirtVideo_jk');
                        this.RecoverRightPanel();
                        break
                    case '餐饮油烟监控':
                        this.$router.push('/FoodFumeVideo_jk');
                        this.RecoverRightPanel();
                        break;
                    case '工地扬尘监控':
                        this.$router.push('/SiteDustVideo_jk');
                        this.RecoverRightPanel();
                        break;
                    case '秸秆焚烧':
                        this.$router.push('/StrawBurningVideo_jk');
                        this.RecoverRightPanel();
                        break;
                    case 'VOC监控':
                        this.$router.push('/VocsVideo_jk');
                        this.RecoverRightPanel();
                        break;
                    case '河道监控':
                        this.$router.push('/RiverMonitoringVideo_jk');
                        this.RecoverRightPanel();
                        break;
                    default:
                        this.$router.push('/');
                        this.ExtendRightPanel();
                        break
                }
            }
        },
        components: {Toolbar}
    }
 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    .Paneldataindex {
        width: 410px;
        height: auto;
        background-color: #666;
        position: absolute;
        top: 60px;
        right: 0;

        .border_bottom {
            width: 100%;
            height: 1px;
            border-bottom: 1px solid #ccc;
            margin-bottom: 20px;
        }

        #list {
            background: #fff;
            position: fixed;
            width: 467px;
            height: 100%;
            top: 56px;
            right: 0;
            z-index: 9;
            transition: all 500ms;
            box-shadow: -10px 0px 10px rgba(36,148,242,0.43);
            .gensui {

                .line_top {
                    position: absolute;
                    left: -455px;
                    top: 48px;
                    height: 46px;
                    background: #fff;
                    border-radius: 4px;
                    box-shadow: 0 0 4px #ccc;
                    .fengxiang{
                        width: 130px;
                        height: 46px;
                        background: #fff;
                        border-radius: 4px;
                        box-shadow: 0 0 4px #ccc;
                        position: absolute;
                        line-height: 46px;
                        top: 0;
                        left: -140px;
                    }
                }

            }


            .panel{
                float: left;
                img {
                    position: absolute;
                    top: 40%;
                    left: -17px;
                    cursor: pointer;
                    float: left;
                }
                .main {
                    height: auto;
                    .table_tie {
                    width: 430px;
                    height: 405px;
                    margin: 0px auto;
                    padding-top: 15px;
                    li {
                        list-style: none;
                        height: auto;
                        .item-table1 {
                            border: solid 1px #ccc;
                            border-top: none;
                            width: 44px;
                            float: left;
                        }
                        .item-table2 {
                            border: solid 1px #ccc;
                            border-top: none;
                            border-left: none;
                            border-right: none;
                            width: 89px;
                            float: left;
                        }
                        .item-table3 {
                            border: solid 1px #ccc;
                            border-top: none;
                            width: 296px;
                            float: left;
                            p {
                                line-height: 40px;
                                font-size: 12px;
                                text-align: left;
                                padding-left: 10px;
                            }
                        }
                    }
                    .table_title {
                        color: #333;
                        .item-table1 {
                            background: #f6f6f6;
                            border: solid 1px #ccc;
                            height: 56px;
                            line-height: 56px;
                        }
                        .item-table2 {
                            background: #f6f6f6;
                            border: solid 1px #ccc;
                            border-left: none;
                            border-right: none;
                            height: 56px;
                            line-height: 56px;
                        }
                        .item-table3 {
                            background: #f6f6f6;
                            border: solid 1px #ccc;
                            height: 56px;
                            line-height: 56px;
                        }

                    }
                }
                    .tongji {
                    width: 427px;
                    height: 306px;
                    margin: 0 auto;
                    margin-top: 14px;
                    border: solid 1px #ccc;
                    background: #F6F6F6;
                    .table_item {
                        float: left;
                        margin-top: 13px;
                        margin-left: 18px;
                        width: 118px;
                        height: 83px;
                        text-align: center;
                        background: #fff;
                        border: 1px solid #C8C8C8;
                        strong {
                            line-height: 48px;
                            font-size: 24px;
                            color: #555;
                        }
                        p {
                            font-size: 14px;
                            color: #888;
                        }
                    }
                }
                    .bing {
                    width: 430px;
                    height: 366px;
                    margin: 0 auto;
                    margin-top: 20px;
                    .look {
                        width: 49%;
                        height: auto;
                        float: left;
                        p {
                            color: #434D55;
                            font-size: 14px;
                            font-weight: bold;
                        }
                        ul {
                            li {
                                list-style: none;
                                font-size: 12px;
                                width: 104px;
                                height: 20px;
                                float: left;
                                text-align: left;
                                padding-left: 5px;
                                img {
                                    position: inherit;
                                    width: 14px;
                                    height: auto;
                                    vertical-align: middle;
                                    margin-top: 4px;
                                    margin-right: 5px;
                                }
                            }
                        }
                    }
                    .bing_item1 {
                        width: 203px;
                        height: 180px;
                        float: left;
                    }
                    .bing_item2 {
                        width: 203px;
                        height: 180px;
                        float: left;
                    }

                    .bing_item3 {
                        width: 203px;
                        height: 180px;
                        float: left;
                    }

                    .bing_item4 {
                        width: 203px;
                        height: 180px;
                        float: left;
                    }

                }
                }
            }
            .meun_right{
                position: absolute;
                top: 0px;
                right: 0;
                width: 34px;
                height: 100%;
                background: rgb(160,160,160);
                z-index: 60;
                ul{
                    padding-top: 42px;
                    li{
                        width: 34px;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        list-style: none;
                        cursor: pointer;
                        :hover{
                            -webkit-transform:scale(1.5);
                            -moz-transform:scale(1.5) ;
                            -o-transform:scale(1.5) ;
                            transform:scale(1.5) ;
                        }
                    }

                    p{
                        font-size: 0.2rem;
                        color: #666;
                    }
                    img{
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        position: static;

                    }
                    .active{
                        color: #0d0d0d;
                    }
                    .backgroundColor{
                        background: #fff;
                    }
                }
            }
        }
    }


</style>
