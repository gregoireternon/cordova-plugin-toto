package easysubs;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by gtn on 26/01/2018.
 */

public class Toto extends CordovaPlugin {


    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        JSONObject jo = new JSONObject();
        jo.put("koko","TOTOSUCCESS");
        callbackContext.success(jo);
        return true;
    }
}
