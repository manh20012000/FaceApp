@echo off
"C:\\Program Files\\Java\\jdk-17\\bin\\java" ^
  --class-path ^
  "C:\\Users\\levan\\.gradle\\caches\\modules-2\\files-2.1\\com.google.prefab\\cli\\2.0.0\\f2702b5ca13df54e3ca92f29d6b403fb6285d8df\\cli-2.0.0-all.jar" ^
  com.google.prefab.cli.AppKt ^
  --build-system ^
  cmake ^
  --platform ^
  android ^
  --abi ^
  arm64-v8a ^
  --os-version ^
  21 ^
  --stl ^
  c++_shared ^
  --ndk-version ^
  23 ^
  --output ^
  "C:\\Users\\levan\\AppData\\Local\\Temp\\agp-prefab-staging1721425636271681707\\staged-cli-output" ^
  "C:\\Users\\levan\\.gradle\\caches\\transforms-3\\c89beba49bda3c7ff0db4787685e5ed7\\transformed\\jetified-react-android-0.72.3-debug\\prefab" ^
  "C:\\Users\\levan\\.gradle\\caches\\transforms-3\\34c2120d0d3cd8dc97826fc02c9e8fc4\\transformed\\jetified-fbjni-0.3.0\\prefab" ^
  "C:\\Users\\levan\\.gradle\\caches\\transforms-3\\430a607cf6d546758ce98bd168677a7b\\transformed\\jetified-hermes-android-0.72.3-debug\\prefab"