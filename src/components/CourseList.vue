<template>
  <div id="course-list">
    <h1>所有课程</h1>
    <el-row class="list-filter">
      <el-col>
        <el-button
          :class="courseType == 0 ? 'el-button--primary' : 'el-button--text'"
          size="mini"
          round
          @click="changeCourseType(0)"
        >全部课程</el-button>
        <el-button
          :class="courseType == 1 ? 'el-button--primary' : 'el-button--text'"
          size="mini"
          round
          @click="changeCourseType(1)"
        >自然科学</el-button>
        <el-button
          :class="courseType == 2 ? 'el-button--primary' : 'el-button--text'"
          size="mini"
          round
          @click="changeCourseType(2)"
        >园艺栽培</el-button>
        <el-button
          :class="courseType == 3 ? 'el-button--primary' : 'el-button--text'"
          size="mini"
          round
          @click="changeCourseType(3)"
        >创意绘画</el-button>
        <el-button
          :class="courseType == 4 ? 'el-button--primary' : 'el-button--text'"
          size="mini"
          round
          @click="changeCourseType(4)"
        >摄影技巧</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col
        :span="6"
        v-for="(item, index) in courseList"
        :index="index"
        :key="index"
        :class="courseType == 0 || courseType == item.courseType ? '' : 'hide'"
      >
        <router-link :to="'/home/course/' + item.courseNo">
          <div class="course">
            <div
              :style="{background: 'transparent url(' + require('../assets/images/course/'+item.coursePic) + ') no-repeat scroll center center'}"
              class="course-img"
            >
              <div class="course-date">
                <time class="time">{{item.startTime | date-format}}</time>
              </div>
            </div>
            <div class="course-info">
              <div class="course-name">{{item.courseName}}</div>
              <div class="teacher-name">{{item.teacherName}}</div>
            </div>
          </div>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "course-list",
  data() {
    return {
      courseList: [],
      courseType: 0
    };
  },
  created: function() {
    var self = this;
    self.axios
      .get("/api/courseList")
      .then(function(response) {
        self.courseList = response.data.data;
      })
      .catch(function(error) {
        self.$message.error(response.data.message);
      });
  },
  methods: {
    changeCourseType: function(type) {
      this.courseType = type;
    }
  }
};
</script>
<style scoped>
@import "../assets/css/course-list.css";
</style>

