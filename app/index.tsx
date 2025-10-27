import EntradaTexto from "@/components/EntradaTexto";
import Parrafo from "@/components/Parrafo";
import { useAppContext } from "@/hooks/globalContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, View } from "react-native";

export default function Index() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { globalState, setGlobalState } = useAppContext();
  const validateLogin = () => {
    if (password === "1234") {
      setGlobalState({ ...globalState, usuario: usuario });
      router.replace("/appLogin/home");
    } else alert("Login fallido");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Parrafo contenido="Por favor, inicia sesión" />
      <EntradaTexto
        placeholder="Email"
        keyboardType="email-address"
        key={"user"}
        onChangeText={setUsuario}
        value={usuario}
      />
      <EntradaTexto
        placeholder="password"
        keyboardType="email-address"
        secureTextEntry
        key={"password"}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="entrar" onPress={validateLogin} />
    </View>
  );
}
