//uniform float iTime;
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    float FREQUENCY = 5.0;

	float brightness = sign(sin(3.1415*iTime*10.0*FREQUENCY));

	//vec2 uv = fragCoord.xy / iResolution.xy;
	fragColor = vec4( vec3(brightness), 1.0 );
}