import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="into-one"
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="into-two"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="into-three"
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default AuthLayout;