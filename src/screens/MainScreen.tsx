import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const recommended = [
  {
    title: 'Creamy Pasta',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwFhnRmETpWL7XQk6PKkuMHaPvZ714wtdioU5_eS7BD0ECrOvBe7qos2cEPAnf6HUpBxJqItE3Qhpg30hKra5WEgv7Bo4DglpBU7Ktm1iKNe1k11rbxdr9YccCAxDNrBtppidO4ZjDZuiyv82Ur2Tshg0uGP6u4qLc9ZHtDWr0Pfg4VUVhZEpSePX03pSrQRj1MqB1JVokbl1_U0xzpLBLgxTqu9tkkOBPMknTirrOWHKHGU2Yq1clsLPsW0Zav6rnUPX0OvwCThp5',
  },
  {
    title: 'Fresh Garden Salad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhOncgJuiLb94aapREjVAyD-8V3kr88ruL77YO7uhWxM-wMYAibYep0IAErHhWBLUy4QFVfgGazXSzBwDyqtHy3DhjIhwukWGMRJnTA7ewIOXs8l6Jtsycn-QvnqPX5u8z38TQezIXjfF5JbV-jS17H_swTgWnolaGK42bdWFg1Ibf4-VVhHztkWZEx_9p94z6Mx7px9mxKAhk77RJWvXCx_xifH-acFMPvstPO7Xfr_CwrJZCtoHLUaG3XYZVvoiesHbuP1R9Knm_',
  },
  {
    title: 'Tomato Soup',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx84Lm4qKp8WCMTofQZYvwtT4crwgI4xEndTNZ4171bqkhQRBaU4uUrvECRKR9r94Vr2mO9CjBVIIOVna0O28d9sDhoNJKWQVoO0RMTP39l7o0_VxKCK3_FQbL_kZP3m80h3i6wswkMYmC_-P8iIt8jKTSWTZqgjoEBhha-OuPLPw45UebaVlgQwZcav7fPztUOzK1W9z6jhXsLIOXPbY4fnsxDL_Qc9Z74jrX6eLEz9l-4cvfcKn9vfyQKsr5z90s25mI_75X08pJ',
  },
];
const trending = [
  {
    title: 'Homemade Sushi',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPoAhWaxoklXjELJAv7phbVzqPt_Eacf9Oy5pGRjhuc3_UmCN7LMoJrlkPUgzLvgGO7wuvBrasXyJlpVXFS35XBAiM2OYp2dgk5-w28R3ySFCTFe_SNWzxQqKtLl1kihOA_yMUueIeccbt_G66b7amuJoHYriyGeq2kTuv7YdTTTh4dL0EvOo7qk6dNhWGPoBJXbON_QcODhVzkQsKm1WCR56BBoT9cPOp9nopjyRTqn75UsI9vcW_FAOoeqv7vGHG3YsKVygqPNJ4',
  },
  {
    title: 'Authentic Tacos',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaWk6jXso5dJ_9_Lrk4uFG4JuiKyvFTN3pdccsuhjigUCP1INmnIirw4ZjaquQAeORl19KBVwv654TrJ7afTtnJ7j0MfdX8EQN75gc1XZXLfklNHZ4y99X-7Y1VHrKDnNN6MoVPpxJk_C-A5-HiCu644WVyIdhPF4_30hJVraXhkc-s185WRn-TZh18FcKkzAjHXCGv81qjQvpNIhQ8idtpdfvUQ9CnDmWXlL2DVR4awVgUVsh1zVQoqbeKTZAO7vT6HdEyrLD96Tp',
  },
  {
    title: 'Gourmet Pizza',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA49SpyHSKqWsQX2Bo0THpzTFTJkGYBy23P_rpxDUBonHRHtxsmfjlbotPE3rVE1GorVpq-bJpPXQXvz_Ma6jxG32ey07sJnYRwsFpZzXeGdgvqAGUooITXPqVDQXgcAUToWA70eGPwSE7o9u29tIUNbr__5f6mfVGIxXDmtktXgpcwNgN3D_BwUih6-fptt2weK86p83WZuF5eSuqd9h6r-y_1LvpO9SNkM_WXsDnA6BlzMEVP6UsJXJZmIJHT1J6e0ffJGhKwjgpn',
  },
];
const community = [
  {
    title: "User1's Recipe",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL_tt37bvGLtdHP5MOLnKOl7PF-aX_mOYQPMoWGjfsqeniK00CTCkdenmd7TPr3qARLMK0NltMDet0tgnRPVBindCiO4HeXvvuEntANx8NvNR6N-vTmRzC383Rm8pXjwOYyJPTKB74O2MrMGihPrapP5Dja44H1OaT-Q_xvMcR8UnDlyHMyPGHAcejYt24wHCcaLEsacIU-z_2mBfuGpmqCs08z7yZc_BvW43fMfl5TSgr2wpt3TLFqwFz5cYCOuT4GyyjmxXPSgBZ',
  },
  {
    title: "User2's Cooking Tip",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwV_r5Vhm5q8LbspcQFWFllLmNpaq3EYaJNLywsWscifjZ_X_c8IwQamA59MIB4uh5pX3NZK65h95oTN4CFYiXwnIPbkfUxMYrtNxaTCsb3UyTDOthFKyrRvVR97Bi1_N4UxzLgJBmS8k4Q972Id86CeR7WRFB0tRETq0Gi5KnG3ORFMYl2vEzYqZPZPruTtGFBJLS1C-u7b1oQux1uyUjWo_pzNsS3WHl4mj9b-ZKi4uFC_hKzqvek6UMEACy6E8wpq_o_7WV_nnX',
  },
  {
    title: "User3's Food Photo",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUQAzUAn_e9knxIp07hM2vtjryoMsz5zDT8Bj7vZNHbaeOuej4DBi4Dim1bilKoJG7ryVQryjDDr6NrhiUXZY8VBxC1KEHqqVppgEsBXzivAhrR_QLH7zVJ9ZjueNnga2tYunv40gFn4Zo3maekg3Kp7tyOaeW8ydUpo6Mth_6wah6DE6MmJxUrWMAfyAJyMcPbXwYOXpL1yjx1BfOFzQ4av9t9rKXcxCklMUm-tWZkmzPkMH-xVlUQP13vJa2cYD-2F23iQRf4EyZ',
  },
];

const { width } = Dimensions.get('window');

export default function MainScreen() {
  // 하단 탭바 직접 구현 없이, 본문 내용만 렌더링
  return (
    <ScrollView style={mainStyles.container}>
      {/* Header */}
      <View style={mainStyles.headerRow}>
        <Text style={mainStyles.headerTitle}>Home</Text>
      </View>

      {/* Quick Actions */}
      <View style={mainStyles.quickRow}>
        <TouchableOpacity style={mainStyles.quickButtonRed}>
          <Text style={mainStyles.quickButtonTextRed}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={mainStyles.quickButtonGray}>
          <Text style={mainStyles.quickButtonTextGray}>Upload</Text>
        </TouchableOpacity>
      </View>

      {/* Trending */}
      <Text style={mainStyles.sectionTitle}>Trending</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 8 }}>
        {trending.map((item, idx) => (
          <View key={idx} style={[mainStyles.recipeCard, { marginRight: 12 }]}>
            <Image source={{ uri: item.image }} style={mainStyles.recipeImage} />
            <Text style={mainStyles.recipeTitle}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Community */}
      <Text style={mainStyles.sectionTitle}>Community</Text>
      <View style={mainStyles.communityGrid}>
        {community.map((item, idx) => (
          <View key={idx} style={[mainStyles.communityCard, { marginBottom: 12, marginRight: idx % 2 === 0 ? 12 : 0 }]}>
            <Image source={{ uri: item.image }} style={mainStyles.communityImage} />
            <Text style={mainStyles.recipeTitle}>{item.title}</Text>
          </View>
        ))}
      </View>
      <View style={{ height: 24 }} />
    </ScrollView>
  );
}

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 8,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181111',
    paddingLeft: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181111',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 8,
  },
  quickRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  quickButtonRed: {
    flex: 1,
    backgroundColor: '#e82630',
    borderRadius: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickButtonGray: {
    flex: 1,
    backgroundColor: '#f4f0f0',
    borderRadius: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickButtonTextRed: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  quickButtonTextGray: {
    color: '#181111',
    fontWeight: 'bold',
    fontSize: 15,
  },
  recipeCard: {
    width: 120,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
  },
  recipeImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#eee',
  },
  recipeTitle: {
    color: '#181111',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 8,
    marginBottom: 8,
    textAlign: 'center',
  },
  communityGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  communityCard: {
    width: (width - 16 * 2 - 12) / 2,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
  },
  communityImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 16,
    backgroundColor: '#eee',
  },
}); 