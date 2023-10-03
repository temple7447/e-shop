import React from 'react';
import { View, Text, TextInput, TouchableOpacity ,StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Auth = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'hsl(218, 50%, 91%)' }}>
    <View style={{ flexDirection: 'column', alignItems: 'center', padding: 20, borderRadius: 30, backgroundColor: 'hsl(213, 85%, 97%)', shadowColor: 'hsl(231, 62%, 94%)', shadowOffset: { width: 0, height: 0 }, shadowRadius: 20, shadowOpacity: 1 }}>
      <Text style={{ fontFamily: 'Poppins' }}>Sign up</Text>
      <View style={{ backgroundColor: 'hsl(0, 0%, 100%)', shadowColor: 'hsl(231, 62%, 94%)', shadowOffset: { width: 0, height: 0 }, shadowRadius: 20, shadowOpacity: 1, padding: 10, borderRadius: 20, color: 'hsl(0, 0%, 30%)', marginTop: -60 }}>
        <TextInput placeholder="User name" required style={{ outline: 'none', border: 'none', fontSize: 16, fontFamily: 'Poppins', color: 'hsl(0, 0%, 0%)' }} />
        <TextInput placeholder="Email" required style={{ outline: 'none', border: 'none', fontSize: 16, fontFamily: 'Poppins', color: 'hsl(0, 0%, 0%)' }} />
        <TextInput placeholder="Password" required style={{ outline: 'none', border: 'none', fontSize: 16, fontFamily: 'Poppins', color: 'hsl(0, 0%, 0%)' }} secureTextEntry />
        <TouchableOpacity style={{ marginTop: -10 }}>
          <Ionicons name="mail-outline" size={20} color="hsl(0, 0%, 30%)" />
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: 'hsl(0, 0%, 100%)', shadowColor: 'hsl(231, 62%, 94%)', shadowOffset: { width: 0, height: 0 }, shadowRadius: 20, shadowOpacity: 1, padding: 10, borderRadius: 20, color: 'hsl(0, 0%, 30%)', marginTop: 10 }}>
        <TextInput placeholder="Password" required style={{ outline: 'none', border: 'none', fontSize: 16, fontFamily: 'Poppins', color: 'hsl(0, 0%, 0%)' }} secureTextEntry />
        <TouchableOpacity style={{ marginTop: -10 }}>
          <Ionicons name="lock-closed-outline" size={20} color="hsl(0, 0%, 30%)" />
        </TouchableOpacity>
        <TouchableOpacity style={{ position: 'absolute', right: -50, top: 10 }}>
          <Ionicons name="eye-outline" size={20} color="hsl(0, 0%, 30%)" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ backgroundColor: 'hsl(233, 36%, 38%)', borderRadius: 30, padding: 10, color: 'hsl(0, 0%, 100%)', fontWeight: '600', marginTop: 10 }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
    <View style={{ display: 'flex', flexDirection: 'row', fontSize: 14, color: 'hsl(0, 0%, 37%)', gap: 140, paddingBottom: 100, marginTop: 10 }}>
      <TouchableOpacity>
        <Text>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default Auth

const styles = StyleSheet.create({

})


