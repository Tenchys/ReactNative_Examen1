import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export function HomeIcon({ color, size }: { color: string; size: number }) {
  return <MaterialIcons name="home" color={color} size={size} />;
}

export function LoginIcon({ color, size }: { color: string; size: number }) {
  return <MaterialIcons name="login" color={color} size={size} />;
}
