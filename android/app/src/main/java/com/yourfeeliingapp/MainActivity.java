package com.yourfeeliingapp;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import com.facebook.react.bridge.JSIModulePackage; 
import com.swmansion.reanimated.ReanimatedJSIModulePackage; 



private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

      @Override
      protected String getJSMainModuleName() {
        return "index";
      }

      @Override
      protected JSIModulePackage getJSIModulePackage() {
        return new ReanimatedJSIModulePackage(); // <- add
      }
    };

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "yourFeeliingApp";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
  
}
