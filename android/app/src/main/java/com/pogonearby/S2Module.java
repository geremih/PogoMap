package com.pogonearby;


import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.android.gms.maps.model.LatLng;
import com.google.common.geometry.S2CellId;
import com.google.common.geometry.S2Cell;

import com.google.common.geometry.S2LatLng;
import com.google.common.geometry.S2Point;
;import java.util.ArrayList;
import java.util.List;


/**
 * Created by anakin on 20/6/16.
 */
public class S2Module extends ReactContextBaseJavaModule {


    @Override
    public String getName() {
        return "S2";
    }

    public S2Module(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void getCellId(Float latitude, Float longitude, Promise promise) {
       promise.resolve(Double.valueOf(S2CellId.fromLatLng(S2LatLng.fromDegrees(latitude, longitude)).id()));
    }
    public static String join(List<String> list, String delim) {

        StringBuilder sb = new StringBuilder();

        String loopDelim = "";

        for(String s : list) {

            sb.append(loopDelim);
            sb.append(s);

            loopDelim = delim;
        }

        return sb.toString();
    }

    @ReactMethod
    public void getNeighbours(Float latitude, Float longitude, Promise promise) {

        List<String> walk = new ArrayList<String>();
        S2CellId origin = S2CellId.fromLatLng(S2LatLng.fromDegrees(latitude, longitude)).parent(15);
        walk.add(String.valueOf(origin.id()));
        S2CellId next = origin.next();
        S2CellId prev = origin.prev();

        next = origin.next();
        prev = origin.prev();
        for(int i = 0; i< 10; i++) {
            walk.add(String.valueOf(prev.id()));
            walk.add(String.valueOf(next.id()));
            next = next.next();
            prev = prev.prev();
        }
        promise.resolve(join(walk, ","));
    }

    @ReactMethod
    public void getChildren(Float latitude, Float longitude, Promise promise) {
        List<String> children = new ArrayList<String>();
        S2CellId origin = S2CellId.fromLatLng(S2LatLng.fromDegrees(latitude, longitude)).parent(15);

        for(S2CellId c = origin.childBegin(); !c.equals(origin.childEnd()); c = c.next()) {
            S2LatLng center = new S2LatLng((new S2Cell(c)).getCenter());
            children.add(String.valueOf(center.latDegrees()) + "," + center.lngDegrees());

        }
        promise.resolve(join(children, ";"));
    }

}


