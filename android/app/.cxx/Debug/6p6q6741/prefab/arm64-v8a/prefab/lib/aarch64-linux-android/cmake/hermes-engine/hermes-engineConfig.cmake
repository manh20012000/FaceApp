if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "C:/Users/levan/.gradle/caches/transforms-3/430a607cf6d546758ce98bd168677a7b/transformed/jetified-hermes-android-0.72.3-debug/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/levan/.gradle/caches/transforms-3/430a607cf6d546758ce98bd168677a7b/transformed/jetified-hermes-android-0.72.3-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()
