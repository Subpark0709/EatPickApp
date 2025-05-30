import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  backgroundImageFullScreen: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  topSectionContainer: {
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? '30%' : '25%',
  },
  title: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif-bold',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  description: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    fontSize: 16,
    color: '#F0F0F0',
    textAlign: 'center',
    lineHeight: 24,
    paddingBottom: 30,
    paddingTop: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 8,
  },
  bottomSectionContainer: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    paddingBottom: Platform.OS === 'ios' ? 50 : 40,
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 16,
    letterSpacing: 0.2,
  },
  getStartedButton: {
    backgroundColor: '#e92932',
  },
  getStartedButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loginEmailButton: {
    backgroundColor: '#f4f0f0',
  },
  loginEmailButtonText: {
    color: '#181111',
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(224, 224, 224, 0.7)',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 12,
    color: '#E0E0E0',
    textTransform: 'uppercase',
  },
  socialButton: {},
  googleButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  googleButtonText: {
    color: '#333333',
    fontWeight: '500',
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
  },
  kakaoButtonText: {
    color: '#191919',
    fontWeight: '500',
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
    marginLeft: 4,
    resizeMode: 'contain',
  },
  socialButtonText: {
    flex: 1,
    textAlign: 'center',
  },
});

export default styles;
