void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord.xy / iResolution.xy;
    vec2 texel = 1. / iResolution.xy;
    
    float step_y = texel.y;
    vec2 s  = vec2(0.0, -step_y);
    vec2 n  = vec2(0.0, step_y);

    vec4 im_n =  texture(iChannel0, uv+n);
    vec4 im =    texture(iChannel0, uv);
    vec4 im_s =  texture(iChannel0, uv+s);
    
    // use luminance for sorting
    float len_n = dot(im_n, vec4(0.299, 0.587, 0.114, 0.));
    float len = dot(im, vec4(0.299, 0.587, 0.114, 0.));
    float len_s = dot(im_s, vec4(0.299, 0.587, 0.114, 0.));
    
    if(int(mod(float(iFrame) + fragCoord.y, 2.0)) == 0) {
        if ((len_s > len)) { 
            im = im_s;    
        }
    } else {
        if ((len_n < len)) { 
            im = im_n;    
        }   
    }
    
    // blend with image
    if(iFrame<1) {
        fragColor = texture(iChannel1, uv);
    } else {
        fragColor = (texture(iChannel1, uv) + im * 99. ) / 100.;
    }
    
}