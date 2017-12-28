void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 xy = fragCoord.xy / iResolution.xy; // flatten_img
    vec4 texColor = texture(iChannel1,xy); // get pixel with coords (x;y) from iChannel0
    if (texColor.z > 0.5) {
        texColor.x = sin(iTime);
        texColor.y = cos(iTime);
        texColor.z = sin(iTime);
    }
    if (texColor.z > 0.01) {
        texColor.x = sin(iTime * 10.0);
        texColor.y = cos(iTime * 20.0);
        texColor.z = sin(iTime);
    }
    fragColor = texColor; // set pixel color
}
