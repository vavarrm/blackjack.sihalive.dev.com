<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class MyRsa
{
	private $CI ;

	
	public function __construct() 
	{
		$this->CI =& get_instance();

	}
	
	
	private static $PRIVATE_KEY = '-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQDuFGq1aymmAm3ME8TvtBHOtRS5F/4PSgS+9xnN1xSlf4hy7Bbz
17dxJQLS7/mM+E6GJW+/SCO3XzFL+IDI1l1AOPsSJ5gmmj2EKbFcs75yIC3tYRKb
DWF66l6oFbmN7kEMcjlbaHsvi6jzlhM59VdcanAapc2Z7syF3navdr7+LQIDAQAB
AoGBANPIQawkKaZNHtKc+2Cnc/fGySpll1CObW5abQ/YNbuKmRxxu3EqATqay8pM
QlcOQvu9rYwgZfUmrrl/0z/UwJk7WUfi2cRWZ1oVLQvk+gi+N2LD1OZ8oIEvOmwD
G9KQib64LTqz55aQp2/rzkcOo7+6VL3xe0lufRiLBz9djgvBAkEA+RZQWPQWDwq/
f+1xEJQ34ZbYM+A011h2uNHLkrVjpFSM/3GVmzHe0FKQhi1+HbqgxPOpdFiIOKC1
/QtAlxECeQJBAPSv5hZDbQx1v/rSjl4VGR/uFhWnDikBqFJGgiatnY6XsFl18421
eCV7dsg0jXVA/6GRKuW6wQcyIYETtA73jFUCQGgxU07CW2/TWSOUGRWMSovM44df
o/rogFDzQSqPQaz9yTUZODGA/Ok7gEUARp788D8yhZGrbt/xKe89g7ktXlECQCaW
IqO6KFVBsG++iqL9ksO9SRBLEumWkFPBOL8eu+0DsNS6zBi52GOYz8eMug4WnPl+
qhQmWlBnMG9piwidMy0CQQCarPcD8olc4iAVlpv5JojZwHsmM8rIUFk0HSRNcGly
UYXMuS1TjFvwbg75EasXjm/K5ETeP4+D2HZu4jWfw02u
-----END RSA PRIVATE KEY-----';    
    private static $PUBLIC_KEY = '-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDuFGq1aymmAm3ME8TvtBHOtRS5
F/4PSgS+9xnN1xSlf4hy7Bbz17dxJQLS7/mM+E6GJW+/SCO3XzFL+IDI1l1AOPsS
J5gmmj2EKbFcs75yIC3tYRKbDWF66l6oFbmN7kEMcjlbaHsvi6jzlhM59VdcanAa
pc2Z7syF3navdr7+LQIDAQAB
-----END PUBLIC KEY-----
';   
	private static $padding = OPENSSL_PKCS1_PADDING;
    /**     
     * 获取私钥     
     * @return bool|resource     
     */    
    private static function getPrivateKey() 
    {        
        $privKey = self::$PRIVATE_KEY;       

        return openssl_pkey_get_private($privKey, "phrase");    
    }    

    /**     
     * 获取公钥     
     * @return bool|resource     
     */    
    private static function getPublicKey()
    {        
        $publicKey = self::$PUBLIC_KEY;        
		
        return openssl_pkey_get_public($publicKey);    
    }    

    /**     
     * 私钥加密     
     * @param string $data     
     * @return null|string     
     */    
    public static function privateEncrypt($data = '')    
    {        
        if (!is_string($data)) {            
            return null;       
        }        
        return openssl_private_encrypt($data,$encrypted,self::getPrivateKey(), OPENSSL_PKCS1_PADDING) ? base64_encode($encrypted) : null;    
    }    

    /**     
     * 公钥加密     
     * @param string $data     
     * @return null|string     
     */    
    public static function publicEncrypt($data = '')   
    {        
        if (!is_string($data)) {            
            return null;        
        }        
        return openssl_public_encrypt($data,$encrypted,self::getPublicKey(), OPENSSL_PKCS1_PADDING) ? base64_encode($encrypted) : null;    
    }    

    /**     
     * 私钥解密     
     * @param string $encrypted     
     * @return null     
     */    
    public static function privateDecrypt($encrypted = '')    
    {        
        if (!is_string($encrypted)) {            
            return null;        
        }        
        return (openssl_private_decrypt(base64_decode($encrypted), $decrypted, self::getPrivateKey(), OPENSSL_PKCS1_PADDING)) ? $decrypted : null;    
    }    

    /**     
     * 公钥解密     
     * @param string $encrypted     
     * @return null     
     */    
    public static function publicDecrypt($encrypted = '')    
    {        
        if (!is_string($encrypted)) {            
            return null;        
        }        
		return (openssl_public_decrypt(base64_decode($encrypted), $decrypted, self::getPublicKey(), OPENSSL_PKCS1_PADDING)) ? $decrypted : null;    
    }

}