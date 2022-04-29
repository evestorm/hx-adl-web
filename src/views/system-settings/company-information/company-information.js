import api from "@/api/system-set";

export default {
  name: "company-information",
  data() {
    return {
      componyInfo: {},
    };
  },
  created() {
    this.getComponyInfo();
  },
  methods: {
    async getComponyInfo() {
      const componyData = await api.getCompanyInfo();
      const [err, data] = componyData;
      if (err) {
        return Promise.resolve(err);
      }
      this.componyInfo = data;
      // 保存到vuex里
      this.$store.commit("user/SET_COMPONY_INFO", data);
    },
  },
};
