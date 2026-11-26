nce, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Re={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oA},alphaMap:{value:null},alphaMapTransform:{value:new oA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oA}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oA},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oA},alphaTest:{value:0},uvTransform:{value:new oA}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oA},alphaMap:{value:null},alphaMapTransform:{value:new oA},alphaTest:{value:0}}},Ei={basic:{uniforms:kt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:tA.meshbasic_vert,fragmentShader:tA.meshbasic_frag},lambert:{uniforms:kt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Se(0)}}]),vertexShader:tA.meshlambert_vert,fragmentShader:tA.meshlambert_frag},phong:{uniforms:kt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:tA.meshphong_vert,fragmentShader:tA.meshphong_frag},standard:{uniforms:kt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tA.meshphysical_vert,fragmentShader:tA.meshphysical_frag},toon:{uniforms:kt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Se(0)}}]),vertexShader:tA.meshtoon_vert,fragmentShader:tA.meshtoon_frag},matcap:{uniforms:kt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:tA.meshmatcap_vert,fragmentShader:tA.meshmatcap_frag},points:{uniforms:kt([Re.points,Re.fog]),vertexShader:tA.points_vert,fragmentShader:tA.points_frag},dashed:{uniforms:kt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tA.linedashed_vert,fragmentShader:tA.linedashed_frag},depth:{uniforms:kt([Re.common,Re.displacementmap]),vertexShader:tA.depth_vert,fragmentShader:tA.depth_frag},normal:{uniforms:kt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:tA.meshnormal_vert,fragmentShader:tA.meshnormal_frag},sprite:{uniforms:kt([Re.sprite,Re.fog]),vertexShader:tA.sprite_vert,fragmentShader:tA.sprite_frag},background:{uniforms:{uvTransform:{value:new oA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tA.background_vert,fragmentShader:tA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:tA.backgroundCube_vert,fragmentShader:tA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tA.cube_vert,fragmentShader:tA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tA.equirect_vert,fragmentShader:tA.equirect_frag},distanceRGBA:{uniforms:kt([Re.common,Re.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tA.distanceRGBA_vert,fragmentShader:tA.distanceRGBA_frag},shadow:{uniforms:kt([Re.lights,Re.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:tA.shadow_vert,fragmentShader:tA.shadow_frag}};Ei.physical={uniforms:kt([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oA},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oA},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oA},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oA},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oA},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oA},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oA}}]),vertexShader:tA.meshphysical_vert,fragmentShader:tA.meshphysical_frag};var Zo={r:0,b:0,g:0};function CT(a,e,A,t,i,n,r){let s=new Se(0),U,o,l=n===!0?0:1,c=null,u=0,h=null;function p(f,m){f.getRGB(Zo,$p(a)),t.buffers.color.setClear(Zo.r,Zo.g,Zo.b,m,r)}return{getClearColor:function(){return s},setClearColor:function(f,m=1){s.set(f),l=m,p(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,p(s,l)},render:function(f,m){let M=!1,T=m.isScene===!0?m.background:null;T&&T.isTexture&&(T=(m.backgroundBlurriness>0?A:e).get(T)),T===null?p(s,l):T&&T.isColor&&(p(T,1),M=!0);let D=a.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(a.autoClear||M)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),T&&(T.isCubeTexture||T.mapping===ka)?(o===void 0&&(o=new VA(new Mr(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:va(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(b,x,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),o.material.uniforms.envMap.value=T,o.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,o.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,o.material.toneMapped=IA.getTransfer(T.colorSpace)!==LA,c===T&&u===T.version&&h===a.toneMapping||(o.material.needsUpdate=!0,c=T,u=T.version,h=a.toneMapping),o.layers.enableAll(),f.unshift(o,o.geometry,o.material,0,0,null)):T&&T.isTexture&&(U===void 0&&(U=new VA(new Cs(2,2),new di({name:"BackgroundMaterial",uniforms:va(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(U)),U.material.uniforms.t2D.value=T,U.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,U.material.toneMapped=IA.getTransfer(T.colorSpace)!==LA,T.matrixAutoUpdate===!0&&T.updateMatrix(),U.material.uniforms.uvTransform.value.copy(T.matrix),c===T&&u===T.version&&h===a.toneMapping||(U.material.needsUpdate=!0,c=T,u=T.version,h=a.toneMapping),U.layers.enableAll(),f.unshift(U,U.geometry,U.material,0,0,null))}}}function RT(a,e,A,t){let i=a.getParameter(a.MAX_VERTEX_ATTRIBS),n=t.isWebGL2?null:e.get("OES_vertex_array_object"),r=t.isWebGL2||n!==null,s={},U=h(null),o=U,l=!1;function c(x){return t.isWebGL2?a.bindVertexArray(x):n.bindVertexArrayOES(x)}function u(x){return t.isWebGL2?a.deleteVertexArray(x):n.deleteVertexArrayOES(x)}function h(x){let y=[],L=[],X=[];for(let k=0;k<i;k++)y[k]=0,L[k]=0,X[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:L,attributeDivisors:X,object:x,attributes:{},index:null}}function p(){let x=o.newAttributes;for(let y=0,L=x.length;y<L;y++)x[y]=0}function f(x){m(x,0)}function m(x,y){let L=o.newAttributes,X=o.enabledAttributes,k=o.attributeDivisors;L[x]=1,X[x]===0&&(a.enableVertexAttribArray(x),X[x]=1),k[x]!==y&&((t.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[t.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](x,y),k[x]=y)}function M(){let x=o.newAttributes,y=o.enabledAttributes;for(let L=0,X=y.length;L<X;L++)y[L]!==x[L]&&(a.disableVertexAttribArray(L),y[L]=0)}function T(x,y,L,X,k,z,oe){oe===!0?a.vertexAttribIPointer(x,y,L,k,z):a.vertexAttribPointer(x,y,L,X,k,z)}function D(){b(),l=!0,o!==U&&(o=U,c(o.object))}function b(){U.geometry=null,U.program=null,U.wireframe=!1}return{setup:function(x,y,L,X,k){let z=!1;if(r){let oe=(function(j,re,ie){let Me=ie.wireframe===!0,He=s[j.id];He===void 0&&(He={},s[j.id]=He);let ge=He[re.id];ge===void 0&&(ge={},He[re.id]=ge);let le=ge[Me];return le===void 0&&(le=h(t.isWebGL2?a.createVertexArray():n.createVertexArrayOES()),ge[Me]=le),le})(X,L,y);o!==oe&&(o=oe,c(o.object)),z=(function(j,re,ie,Me){let He=o.attributes,ge=re.attributes,le=0,fe=ie.getAttributes();for(let _ in fe)if(fe[_].location>=0){let ne=He[_],xe=ge[_];if(xe===void 0&&(_==="instanceMatrix"&&j.instanceMatrix&&(xe=j.instanceMatrix),_==="instanceColor"&&j.instanceColor&&(xe=j.instanceColor)),ne===void 0||ne.attribute!==xe||xe&&ne.data!==xe.data)return!0;le++}return o.attributesNum!==le||o.index!==Me})(x,X,L,k),z&&(function(j,re,ie,Me){let He={},ge=re.attributes,le=0,fe=ie.getAttributes();for(let _ in fe)if(fe[_].location>=0){let ne=ge[_];ne===void 0&&(_==="instanceMatrix"&&j.instanceMatrix&&(ne=j.instanceMatrix),_==="instanceColor"&&j.instanceColor&&(ne=j.instanceColor));let xe={};xe.attribute=ne,ne&&ne.data&&(xe.data=ne.data),He[_]=xe,le++}o.attributes=He,o.attributesNum=le,o.index=Me})(x,X,L,k)}else{let oe=y.wireframe===!0;o.geometry===X.id&&o.program===L.id&&o.wireframe===oe||(o.geometry=X.id,o.program=L.id,o.wireframe=oe,z=!0)}k!==null&&A.update(k,a.ELEMENT_ARRAY_BUFFER),(z||l)&&(l=!1,(function(oe,j,re,ie){if(t.isWebGL2===!1&&(oe.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();let Me=ie.attributes,He=re.getAttributes(),ge=j.defaultAttributeValues;for(let le in He){let fe=He[le];if(fe.location>=0){let _=Me[le];if(_===void 0&&(le==="instanceMatrix"&&oe.instanceMatrix&&(_=oe.instanceMatrix),le==="instanceColor"&&oe.instanceColor&&(_=oe.instanceColor)),_!==void 0){let ne=_.normalized,xe=_.itemSize,R=A.get(_);if(R===void 0)continue;let C=R.buffer,Y=R.type,ce=R.bytesPerElement,F=t.isWebGL2===!0&&(Y===a.INT||Y===a.UNSIGNED_INT||_.gpuType===Xd);if(_.isInterleavedBufferAttribute){let Ue=_.data,G=Ue.stride,O=_.offset;if(Ue.isInstancedInterleavedBuffer){for(let W=0;W<fe.locationSize;W++)m(fe.location+W,Ue.meshPerAttribute);oe.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let W=0;W<fe.locationSize;W++)f(fe.location+W);a.bindBuffer(a.ARRAY_BUFFER,C);for(let W=0;W<fe.locationSize;W++)T(fe.location+W,xe/fe.locationSize,Y,ne,G*ce,(O+xe/fe.locationSize*W)*ce,F)}else{if(_.isInstancedBufferAttribute){for(let Ue=0;Ue<fe.locationSize;Ue++)m(fe.location+Ue,_.meshPerAttribute);oe.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=_.meshPerAttribute*_.count)}else for(let Ue=0;Ue<fe.locationSize;Ue++)f(fe.location+Ue);a.bindBuffer(a.ARRAY_BUFFER,C);for(let Ue=0;Ue<fe.locationSize;Ue++)T(fe.location+Ue,xe/fe.locationSize,Y,ne,xe*ce,xe/fe.locationSize*Ue*ce,F)}}else if(ge!==void 0){let ne=ge[le];if(ne!==void 0)switch(ne.length){case 2:a.vertexAttrib2fv(fe.location,ne);break;case 3:a.vertexAttrib3fv(fe.location,ne);break;case 4:a.vertexAttrib4fv(fe.location,ne);break;default:a.vertexAttrib1fv(fe.location,ne)}}}}M()})(x,y,L,X),k!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,A.get(k).buffer))},reset:D,resetDefaultState:b,dispose:function(){D();for(let x in s){let y=s[x];for(let L in y){let X=y[L];for(let k in X)u(X[k].object),delete X[k];delete y[L]}delete s[x]}},releaseStatesOfGeometry:function(x){if(s[x.id]===void 0)return;let y=s[x.id];for(let L in y){let X=y[L];for(let k in X)u(X[k].object),delete X[k];delete y[L]}delete s[x.id]},releaseStatesOfProgram:function(x){for(let y in s){let L=s[y];if(L[x.id]===void 0)continue;let X=L[x.id];for(let k in X)u(X[k].object),delete X[k];delete L[x.id]}},initAttributes:p,enableAttribute:f,disableUnusedAttributes:M}}function ST(a,e,A,t){let i=t.isWebGL2,n;this.setMode=function(r){n=r},this.render=function(r,s){a.drawArrays(n,r,s),A.update(s,n,1)},this.renderInstances=function(r,s,U){if(U===0)return;let o,l;if(i)o=a,l="drawArraysInstanced";else if(o=e.get("ANGLE_instanced_arrays"),l="drawArraysInstancedANGLE",o===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");o[l](n,r,s,U),A.update(s,n,U)},this.renderMultiDraw=function(r,s,U){if(U===0)return;let o=e.get("WEBGL_multi_draw");if(o===null)for(let l=0;l<U;l++)this.render(r[l],s[l]);else{o.multiDrawArraysWEBGL(n,r,0,s,0,U);let l=0;for(let c=0;c<U;c++)l+=s[c];A.update(l,n,1)}}}function LT(a,e,A){let t;function i(b){if(b==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let n=typeof WebGL2RenderingContext!="undefined"&&a.constructor.name==="WebGL2RenderingContext",r=A.precision!==void 0?A.precision:"highp",s=i(r);s!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",s,"instead."),r=s);let U=n||e.has("WEBGL_draw_buffers"),o=A.logarithmicDepthBuffer===!0,l=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),c=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=a.getParameter(a.MAX_TEXTURE_SIZE),h=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),f=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),m=a.getParameter(a.MAX_VARYING_VECTORS),M=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),T=c>0,D=n||e.has("OES_texture_float");return{isWebGL2:n,drawBuffers:U,getMaxAnisotropy:function(){if(t!==void 0)return t;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");t=a.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else t=0;return t},getMaxPrecision:i,precision:r,logarithmicDepthBuffer:o,maxTextures:l,maxVertexTextures:c,maxTextureSize:u,maxCubemapSize:h,maxAttributes:p,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:M,vertexTextures:T,floatFragmentTextures:D,floatVertexTextures:T&&D,maxSamples:n?a.getParameter(a.MAX_SAMPLES):0}}function xT(a){let e=this,A=null,t=0,i=!1,n=!1,r=new ki,s=new oA,U={value:null,needsUpdate:!1};function o(l,c,u,h){let p=l!==null?l.length:0,f=null;if(p!==0){if(f=U.value,h!==!0||f===null){let m=u+4*p,M=c.matrixWorldInverse;s.getNormalMatrix(M),(f===null||f.length<m)&&(f=new Float32Array(m));for(let T=0,D=u;T!==p;++T,D+=4)r.copy(l[T]).applyMatrix4(M,s),r.normal.toArray(f,D),f[D+3]=r.constant}U.value=f,U.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(l,c){let u=l.length!==0||c||t!==0||i;return i=c,t=l.length,u},this.beginShadows=function(){n=!0,o(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(l,c){A=o(l,c,0)},this.setState=function(l,c,u){let h=l.clippingPlanes,p=l.clipIntersection,f=l.clipShadows,m=a.get(l);if(!i||h===null||h.length===0||n&&!f)n?o(null):(function(){U.value!==A&&(U.value=A,U.needsUpdate=t>0),e.numPlanes=t,e.numIntersection=0})();else{let M=n?0:t,T=4*M,D=m.clippingState||null;U.value=D,D=o(h,c,T,u);for(let b=0;b!==T;++b)D[b]=A[b];m.clippingState=D,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=M}}}function QT(a){let e=new WeakMap;function A(i,n){return n===ms?i.mapping=gn:n===gs&&(i.mapping=jn),i}function t(i){let n=i.target;n.removeEventListener("dispose",t);let r=e.get(n);r!==void 0&&(e.delete(n),r.dispose())}return{get:function(i){if(i&&i.isTexture){let n=i.mapping;if(n===ms||n===gs){if(e.has(i))return A(e.get(i).texture,i.mapping);{let r=i.image;if(r&&r.height>0){let s=new SU(r.height/2);return s.fromEquirectangularTexture(a,i),e.set(i,s),i.addEventListener("dispose",t),A(s.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var Xn=class extends ya{constructor(e=-1,A=1,t=1,i=-1,n=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=A,this.top=t,this.bottom=i,this.near=n,this.far=r,this.updateProjectionMatrix()}copy(e,A){return super.copy(e,A),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,A,t,i,n,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=A,this.view.offsetX=t,this.view.offsetY=i,this.view.width=n,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),A=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,i=(this.top+this.bottom)/2,n=t-e,r=t+e,s=i+A,U=i-A;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=o*this.view.offsetX,r=n+o*this.view.width,s-=l*this.view.offsetY,U=s-l*this.view.height}this.projectionMatrix.makeOrthographic(n,r,s,U,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let A=super.toJSON(e);return A.object.zoom=this.zoom,A.object.left=this.left,A.object.right=this.right,A.object.top=this.top,A.object.bottom=this.bottom,A.object.near=this.near,A.object.far=this.far,this.view!==null&&(A.object.view=Object.assign({},this.view)),A}},bh=[.125,.215,.35,.446,.526,.582],is=20,Lc=new Xn,vh=new Se,xc=null,Qc=0,Hc=0,dr=(1+Math.sqrt(5))/2,Ua=1/dr,yh=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,dr,Ua),new S(0,dr,-Ua),new S(Ua,0,dr),new S(-Ua,0,dr),new S(dr,Ua,0),new S(-dr,Ua,0)],Rs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,A=0,t=.1,i=100){xc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,t,i,n),A>0&&this._blur(n,0,0,A),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,A=null){return this._fromTexture(e,A)}fromCubemap(e,A=null){return this._fromTexture(e,A)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xc,Qc,Hc),e.scissorTest=!1,Ko(e,0,0,e.width,e.height)}_fromTexture(e,A){e.mapping===gn||e.mapping===jn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel();let t=A||this._allocateTargets();return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),A=4*this._cubeSize,t={magFilter:GA,minFilter:GA,generateMipmaps:!1,type:Ma,format:$t,colorSpace:ut,depthBuffer:!1},i=wh(e,A,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==A){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(e,A,t);let{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(r){let s=[],U=[],o=[],l=r,c=r-4+1+bh.length;for(let u=0;u<c;u++){let h=Math.pow(2,l);U.push(h);let p=1/h;u>r-4?p=bh[u-r+4-1]:u===0&&(p=0),o.push(p);let f=1/(h-2),m=-f,M=1+f,T=[m,m,M,m,M,M,m,m,M,M,m,M],D=6,b=6,x=3,y=2,L=1,X=new Float32Array(x*b*D),k=new Float32Array(y*b*D),z=new Float32Array(L*b*D);for(let j=0;j<D;j++){let re=j%3*2/3-1,ie=j>2?0:-1,Me=[re,ie,0,re+2/3,ie,0,re+2/3,ie+1,0,re,ie,0,re+2/3,ie+1,0,re,ie+1,0];X.set(Me,x*b*j),k.set(T,y*b*j);let He=[j,j,j,j,j,j];z.set(He,L*b*j)}let oe=new $e;oe.setAttribute("position",new fA(X,x)),oe.setAttribute("uv",new fA(k,y)),oe.setAttribute("faceIndex",new fA(z,L)),s.push(oe),l>4&&l--}return{lodPlanes:s,sizeLods:U,sigmas:o}})(n)),this._blurMaterial=(function(r,s,U){let o=new Float32Array(is),l=new S(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/s,CUBEUV_TEXEL_HEIGHT:1/U,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(n,e,A)}return i}_compileMaterial(e){let A=new VA(this._lodPlanes[0],e);this._renderer.compile(A,Lc)}_sceneToCubeUV(e,A,t,i){let n=new ot(90,1,A,t),r=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],U=this._renderer,o=U.autoClear,l=U.toneMapping;U.getClearColor(vh),U.toneMapping=pn,U.autoClear=!1;let c=new Ht({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),u=new VA(new Mr,c),h=!1,p=e.background;p?p.isColor&&(c.color.copy(p),e.background=null,h=!0):(c.color.copy(vh),h=!0);for(let f=0;f<6;f++){let m=f%3;m===0?(n.up.set(0,r[f],0),n.lookAt(s[f],0,0)):m===1?(n.up.set(0,0,r[f]),n.lookAt(0,s[f],0)):(n.up.set(0,r[f],0),n.lookAt(0,0,s[f]));let M=this._cubeSize;Ko(i,m*M,f>2?M:0,M,M),U.setRenderTarget(i),h&&U.render(u,n),U.render(e,n)}u.geometry.dispose(),u.material.dispose(),U.toneMapping=l,U.autoClear=o,e.background=p}_textureToCubeUV(e,A){let t=this._renderer,i=e.mapping===gn||e.mapping===jn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());let n=i?this._cubemapMaterial:this._equirectMaterial,r=new VA(this._lodPlanes[0],n);n.uniforms.envMap.value=e;let s=this._cubeSize;Ko(A,0,0,3*s,2*s),t.setRenderTarget(A),t.render(r,Lc)}_applyPMREM(e){let A=this._renderer,t=A.autoClear;A.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let n=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=yh[(i-1)%yh.length];this._blur(e,i-1,i,n,r)}A.autoClear=t}_blur(e,A,t,i,n){let r=this._pingPongRenderTarget;this._halfBlur(e,r,A,t,i,"latitudinal",n),this._halfBlur(r,e,t,t,i,"longitudinal",n)}_halfBlur(e,A,t,i,n,r,s){let U=this._renderer,o=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=new VA(this._lodPlanes[i],o),c=o.uniforms,u=this._sizeLods[t]-1,h=isFinite(n)?Math.PI/(2*u):2*Math.PI/39,p=n/h,f=isFinite(n)?1+Math.floor(3*p):is;f>is&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`);let m=[],M=0;for(let b=0;b<is;++b){let x=b/p,y=Math.exp(-x*x/2);m.push(y),b===0?M+=y:b<f&&(M+=2*y)}for(let b=0;b<m.length;b++)m[b]=m[b]/M;c.envMap.value=e.texture,c.samples.value=f,c.weights.value=m,c.latitudinal.value=r==="latitudinal",s&&(c.poleAxis.value=s);let{_lodMax:T}=this;c.dTheta.value=h,c.mipInt.value=T-t;let D=this._sizeLods[i];Ko(A,3*D*(i>T-4?i-T+4:0),4*(this._cubeSize-D),3*D,2*D),U.setRenderTarget(A),U.render(l,Lc)}};function wh(a,e,A){let t=new ti(a,e,A);return t.texture.mapping=ka,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function Ko(a,e,A,t,i){a.viewport.set(e,A,t,i),a.scissor.set(e,A,t,i)}function Ch(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rh(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function _d(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function HT(a){let e=new WeakMap,A=null;function t(i){let n=i.target;n.removeEventListener("dispose",t);let r=e.get(n);r!==void 0&&(e.delete(n),r.dispose())}return{get:function(i){if(i&&i.isTexture){let n=i.mapping,r=n===ms||n===gs,s=n===gn||n===jn;if(r||s){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let U=e.get(i);return A===null&&(A=new Rs(a)),U=r?A.fromEquirectangular(i,U):A.fromCubemap(i,U),e.set(i,U),U.texture}if(e.has(i))return e.get(i).texture;{let U=i.image;if(r&&U&&U.height>0||s&&U&&(function(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c})(U)){A===null&&(A=new Rs(a));let o=r?A.fromEquirectangular(i):A.fromCubemap(i);return e.set(i,o),i.addEventListener("dispose",t),o.texture}return null}}}return i},dispose:function(){e=new WeakMap,A!==null&&(A.dispose(),A=null)}}}function jT(a){let e={};function A(t){if(e[t]!==void 0)return e[t];let i;switch(t){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(t)}return e[t]=i,i}return{has:function(t){return A(t)!==null},init:function(t){t.isWebGL2?(A("EXT_color_buffer_float"),A("WEBGL_clip_cull_distance")):(A("WEBGL_depth_texture"),A("OES_texture_float"),A("OES_texture_half_float"),A("OES_texture_half_float_linear"),A("OES_standard_derivatives"),A("OES_element_index_uint"),A("OES_vertex_array_object"),A("ANGLE_instanced_arrays")),A("OES_texture_float_linear"),A("EXT_color_buffer_half_float"),A("WEBGL_multisampled_render_to_texture")},get:function(t){let i=A(t);return i===null&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),i}}}function JT(a,e,A,t){let i={},n=new WeakMap;function r(U){let o=U.target;o.index!==null&&e.remove(o.index);for(let c in o.attributes)e.remove(o.attributes[c]);for(let c in o.morphAttributes){let u=o.morphAttributes[c];for(let h=0,p=u.length;h<p;h++)e.remove(u[h])}o.removeEventListener("dispose",r),delete i[o.id];let l=n.get(o);l&&(e.remove(l),n.delete(o)),t.releaseStatesOfGeometry(o),o.isInstancedBufferGeometry===!0&&delete o._maxInstanceCount,A.memory.geometries--}function s(U){let o=[],l=U.index,c=U.attributes.position,u=0;if(l!==null){let f=l.array;u=l.version;for(let m=0,M=f.length;m<M;m+=3){let T=f[m+0],D=f[m+1],b=f[m+2];o.push(T,D,D,b,b,T)}}else{if(c===void 0)return;{let f=c.array;u=c.version;for(let m=0,M=f.length/3-1;m<M;m+=3){let T=m+0,D=m+1,b=m+2;o.push(T,D,D,b,b,T)}}}let h=new(Wp(o)?ws:ys)(o,1);h.version=u;let p=n.get(U);p&&e.remove(p),n.set(U,h)}return{get:function(U,o){return i[o.id]===!0||(o.addEventListener("dispose",r),i[o.id]=!0,A.memory.geometries++),o},update:function(U){let o=U.attributes;for(let c in o)e.update(o[c],a.ARRAY_BUFFER);let l=U.morphAttributes;for(let c in l){let u=l[c];for(let h=0,p=u.length;h<p;h++)e.update(u[h],a.ARRAY_BUFFER)}},getWireframeAttribute:function(U){let o=n.get(U);if(o){let l=U.index;l!==null&&o.version<l.version&&s(U)}else s(U);return n.get(U)}}}function FT(a,e,A,t){let i=t.isWebGL2,n,r,s;this.setMode=function(U){n=U},this.setIndex=function(U){r=U.type,s=U.bytesPerElement},this.render=function(U,o){a.drawElements(n,o,r,U*s),A.update(o,n,1)},this.renderInstances=function(U,o,l){if(l===0)return;let c,u;if(i)c=a,u="drawElementsInstanced";else if(c=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",c===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[u](n,o,r,U*s,l),A.update(o,n,l)},this.renderMultiDraw=function(U,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let u=0;u<l;u++)this.render(U[u]/s,o[u]);else{c.multiDrawElementsWEBGL(n,o,0,r,U,0,l);let u=0;for(let h=0;h<l;h++)u+=o[h];A.update(u,n,1)}}}function kT(a){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(A,t,i){switch(e.calls++,t){case a.TRIANGLES:e.triangles+=i*(A/3);break;case a.LINES:e.lines+=i*(A/2);break;case a.LINE_STRIP:e.lines+=i*(A-1);break;case a.LINE_LOOP:e.lines+=i*A;break;case a.POINTS:e.points+=i*A;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",t)}}}}function XT(a,e){return a[0]-e[0]}function NT(a,e){return Math.abs(e[1])-Math.abs(a[1])}function GT(a,e,A){let t={},i=new Float32Array(8),n=new WeakMap,r=new bA,s=[];for(let U=0;U<8;U++)s[U]=[U,0];return{update:function(U,o,l){let c=U.morphTargetInfluences;if(e.isWebGL2===!0){let u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,p=n.get(o);if(p===void 0||p.count!==h){let re=function(){oe.dispose(),n.delete(o),o.removeEventListener("dispose",re)};p!==void 0&&p.texture.dispose();let M=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,D=o.morphAttributes.color!==void 0,b=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],L=0;M===!0&&(L=1),T===!0&&(L=2),D===!0&&(L=3);let X=o.attributes.position.count*L,k=1;X>e.maxTextureSize&&(k=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);let z=new Float32Array(X*k*4*h),oe=new Ea(z,X,k,h);oe.type=vi,oe.needsUpdate=!0;let j=4*L;for(let ie=0;ie<h;ie++){let Me=b[ie],He=x[ie],ge=y[ie],le=X*k*4*ie;for(let fe=0;fe<Me.count;fe++){let _=fe*j;M===!0&&(r.fromBufferAttribute(Me,fe),z[le+_+0]=r.x,z[le+_+1]=r.y,z[le+_+2]=r.z,z[le+_+3]=0),T===!0&&(r.fromBufferAttribute(He,fe),z[le+_+4]=r.x,z[le+_+5]=r.y,z[le+_+6]=r.z,z[le+_+7]=0),D===!0&&(r.fromBufferAttribute(ge,fe),z[le+_+8]=r.x,z[le+_+9]=r.y,z[le+_+10]=r.z,z[le+_+11]=ge.itemSize===4?r.w:1)}}p={count:h,texture:oe,size:new Pe(X,k)},n.set(o,p),o.addEventListener("dispose",re)}let f=0;for(let M=0;M<c.length;M++)f+=c[M];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(a,"morphTargetBaseInfluence",m),l.getUniforms().setValue(a,"morphTargetInfluences",c),l.getUniforms().setValue(a,"morphTargetsTexture",p.texture,A),l.getUniforms().setValue(a,"morphTargetsTextureSize",p.size)}else{let u=c===void 0?0:c.length,h=t[o.id];if(h===void 0||h.length!==u){h=[];for(let T=0;T<u;T++)h[T]=[T,0];t[o.id]=h}for(let T=0;T<u;T++){let D=h[T];D[0]=T,D[1]=c[T]}h.sort(NT);for(let T=0;T<8;T++)T<u&&h[T][1]?(s[T][0]=h[T][0],s[T][1]=h[T][1]):(s[T][0]=Number.MAX_SAFE_INTEGER,s[T][1]=0);s.sort(XT);let p=o.morphAttributes.position,f=o.morphAttributes.normal,m=0;for(let T=0;T<8;T++){let D=s[T],b=D[0],x=D[1];b!==Number.MAX_SAFE_INTEGER&&x?(p&&o.getAttribute("morphTarget"+T)!==p[b]&&o.setAttribute("morphTarget"+T,p[b]),f&&o.getAttribute("morphNormal"+T)!==f[b]&&o.setAttribute("morphNormal"+T,f[b]),i[T]=x,m+=x):(p&&o.hasAttribute("morphTarget"+T)===!0&&o.deleteAttribute("morphTarget"+T),f&&o.hasAttribute("morphNormal"+T)===!0&&o.deleteAttribute("morphNormal"+T),i[T]=0)}let M=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(a,"morphTargetBaseInfluence",M),l.getUniforms().setValue(a,"morphTargetInfluences",i)}}}}function OT(a,e,A,t){let i=new WeakMap;function n(r){let s=r.target;s.removeEventListener("dispose",n),A.remove(s.instanceMatrix),s.instanceColor!==null&&A.remove(s.instanceColor)}return{update:function(r){let s=t.render.frame,U=r.geometry,o=e.get(r,U);if(i.get(o)!==s&&(e.update(o),i.set(o,s)),r.isInstancedMesh&&(r.hasEventListener("dispose",n)===!1&&r.addEventListener("dispose",n),i.get(r)!==s&&(A.update(r.instanceMatrix,a.ARRAY_BUFFER),r.instanceColor!==null&&A.update(r.instanceColor,a.ARRAY_BUFFER),i.set(r,s))),r.isSkinnedMesh){let l=r.skeleton;i.get(l)!==s&&(l.update(),i.set(l,s))}return o},dispose:function(){i=new WeakMap}}}var Ss=class extends At{constructor(e,A,t,i,n,r,s,U,o,l){if((l=l!==void 0?l:Qn)!==Qn&&l!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&l===Qn&&(t=cn),t===void 0&&l===Tr&&(t=xn),super(null,i,n,r,s,U,l,t,o),this.isDepthTexture=!0,this.image={width:e,height:A},this.magFilter=s!==void 0?s:st,this.minFilter=U!==void 0?U:st,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let A=super.toJSON(e);return this.compareFunction!==null&&(A.compareFunction=this.compareFunction),A}},tf=new At,nf=new Ss(1,1);nf.compareFunction=515;var rf=new Ea,af=new bs,sf=new Ir,Sh=[],Lh=[],xh=new Float32Array(16),Qh=new Float32Array(9),Hh=new Float32Array(4);function Na(a,e,A){let t=a[0];if(t<=0||t>0)return a;let i=e*A,n=Sh[i];if(n===void 0&&(n=new Float32Array(i),Sh[i]=n),e!==0){t.toArray(n,0);for(let r=1,s=0;r!==e;++r)s+=A,a[r].toArray(n,s)}return n}function ft(a,e){if(a.length!==e.length)return!1;for(let A=0,t=a.length;A<t;A++)if(a[A]!==e[A])return!1;return!0}function mt(a,e){for(let A=0,t=e.length;A<t;A++)a[A]=e[A]}function Hl(a,e){let A=Lh[e];A===void 0&&(A=new Int32Array(e),Lh[e]=A);for(let t=0;t!==e;++t)A[t]=a.allocateTextureUnit();return A}function VT(a,e){let A=this.cache;A[0]!==e&&(a.uniform1f(this.addr,e),A[0]=e)}function zT(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y||(a.uniform2f(this.addr,e.x,e.y),A[0]=e.x,A[1]=e.y);else{if(ft(A,e))return;a.uniform2fv(this.addr,e),mt(A,e)}}function YT(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y&&A[2]===e.z||(a.uniform3f(this.addr,e.x,e.y,e.z),A[0]=e.x,A[1]=e.y,A[2]=e.z);else if(e.r!==void 0)A[0]===e.r&&A[1]===e.g&&A[2]===e.b||(a.uniform3f(this.addr,e.r,e.g,e.b),A[0]=e.r,A[1]=e.g,A[2]=e.b);else{if(ft(A,e))return;a.uniform3fv(this.addr,e),mt(A,e)}}function ZT(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y&&A[2]===e.z&&A[3]===e.w||(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),A[0]=e.x,A[1]=e.y,A[2]=e.z,A[3]=e.w);else{if(ft(A,e))return;a.uniform4fv(this.addr,e),mt(A,e)}}function KT(a,e){let A=this.cache,t=e.elements;if(t===void 0){if(ft(A,e))return;a.uniformMatrix2fv(this.addr,!1,e),mt(A,e)}else{if(ft(A,t))return;Hh.set(t),a.uniformMatrix2fv(this.addr,!1,Hh),mt(A,t)}}function WT(a,e){let A=this.cache,t=e.elements;if(t===void 0){if(ft(A,e))return;a.uniformMatrix3fv(this.addr,!1,e),mt(A,e)}else{if(ft(A,t))return;Qh.set(t),a.uniformMatrix3fv(this.addr,!1,Qh),mt(A,t)}}function qT(a,e){let A=this.cache,t=e.elements;if(t===void 0){if(ft(A,e))return;a.uniformMatrix4fv(this.addr,!1,e),mt(A,e)}else{if(ft(A,t))return;xh.set(t),a.uniformMatrix4fv(this.addr,!1,xh),mt(A,t)}}function _T(a,e){let A=this.cache;A[0]!==e&&(a.uniform1i(this.addr,e),A[0]=e)}function $T(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y||(a.uniform2i(this.addr,e.x,e.y),A[0]=e.x,A[1]=e.y);else{if(ft(A,e))return;a.uniform2iv(this.addr,e),mt(A,e)}}function eD(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y&&A[2]===e.z||(a.uniform3i(this.addr,e.x,e.y,e.z),A[0]=e.x,A[1]=e.y,A[2]=e.z);else{if(ft(A,e))return;a.uniform3iv(this.addr,e),mt(A,e)}}function AD(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y&&A[2]===e.z&&A[3]===e.w||(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),A[0]=e.x,A[1]=e.y,A[2]=e.z,A[3]=e.w);else{if(ft(A,e))return;a.uniform4iv(this.addr,e),mt(A,e)}}function tD(a,e){let A=this.cache;A[0]!==e&&(a.uniform1ui(this.addr,e),A[0]=e)}function iD(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y||(a.uniform2ui(this.addr,e.x,e.y),A[0]=e.x,A[1]=e.y);else{if(ft(A,e))return;a.uniform2uiv(this.addr,e),mt(A,e)}}function nD(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y&&A[2]===e.z||(a.uniform3ui(this.addr,e.x,e.y,e.z),A[0]=e.x,A[1]=e.y,A[2]=e.z);else{if(ft(A,e))return;a.uniform3uiv(this.addr,e),mt(A,e)}}function rD(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y&&A[2]===e.z&&A[3]===e.w||(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),A[0]=e.x,A[1]=e.y,A[2]=e.z,A[3]=e.w);else{if(ft(A,e))return;a.uniform4uiv(this.addr,e),mt(A,e)}}function aD(a,e,A){let t=this.cache,i=A.allocateTextureUnit();t[0]!==i&&(a.uniform1i(this.addr,i),t[0]=i);let n=this.type===a.SAMPLER_2D_SHADOW?nf:tf;A.setTexture2D(e||n,i)}function sD(a,e,A){let t=this.cache,i=A.allocateTextureUnit();t[0]!==i&&(a.uniform1i(this.addr,i),t[0]=i),A.setTexture3D(e||af,i)}function oD(a,e,A){let t=this.cache,i=A.allocateTextureUnit();t[0]!==i&&(a.uniform1i(this.addr,i),t[0]=i),A.setTextureCube(e||sf,i)}function UD(a,e,A){let t=this.cache,i=A.allocateTextureUnit();t[0]!==i&&(a.uniform1i(this.addr,i),t[0]=i),A.setTexture2DArray(e||rf,i)}function lD(a,e){a.uniform1fv(this.addr,e)}function cD(a,e){let A=Na(e,this.size,2);a.uniform2fv(this.addr,A)}function uD(a,e){let A=Na(e,this.size,3);a.uniform3fv(this.addr,A)}function dD(a,e){let A=Na(e,this.size,4);a.uniform4fv(this.addr,A)}function hD(a,e){let A=Na(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,A)}function pD(a,e){let A=Na(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,A)}function fD(a,e){let A=Na(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,A)}function mD(a,e){a.uniform1iv(this.addr,e)}function gD(a,e){a.uniform2iv(this.addr,e)}function PD(a,e){a.uniform3iv(this.addr,e)}function TD(a,e){a.uniform4iv(this.addr,e)}function DD(a,e){a.uniform1uiv(this.addr,e)}function MD(a,e){a.uniform2uiv(this.addr,e)}function ID(a,e){a.uniform3uiv(this.addr,e)}function BD(a,e){a.uniform4uiv(this.addr,e)}function ED(a,e,A){let t=this.cache,i=e.length,n=Hl(A,i);ft(t,n)||(a.uniform1iv(this.addr,n),mt(t,n));for(let r=0;r!==i;++r)A.setTexture2D(e[r]||tf,n[r])}function bD(a,e,A){let t=this.cache,i=e.length,n=Hl(A,i);ft(t,n)||(a.uniform1iv(this.addr,n),mt(t,n));for(let r=0;r!==i;++r)A.setTexture3D(e[r]||af,n[r])}function vD(a,e,A){let t=this.cache,i=e.length,n=Hl(A,i);ft(t,n)||(a.uniform1iv(this.addr,n),mt(t,n));for(let r=0;r!==i;++r)A.setTextureCube(e[r]||sf,n[r])}function yD(a,e,A){let t=this.cache,i=e.length,n=Hl(A,i);ft(t,n)||(a.uniform1iv(this.addr,n),mt(t,n));for(let r=0;r!==i;++r)A.setTexture2DArray(e[r]||rf,n[r])}var Ju=class{constructor(e,A,t){this.id=e,this.addr=t,this.cache=[],this.type=A.type,this.setValue=(function(i){switch(i){case 5126:return VT;case 35664:return zT;case 35665:return YT;case 35666:return ZT;case 35674:return KT;case 35675:return WT;case 35676:return qT;case 5124:case 35670:return _T;case 35667:case 35671:return $T;case 35668:case 35672:return eD;case 35669:case 35673:return AD;case 5125:return tD;case 36294:return iD;case 36295:return nD;case 36296:return rD;case 35678:case 36198:case 36298:case 36306:case 35682:return aD;case 35679:case 36299:case 36307:return sD;case 35680:case 36300:case 36308:case 36293:return oD;case 36289:case 36303:case 36311:case 36292:return UD}})(A.type)}},Fu=class{constructor(e,A,t){this.id=e,this.addr=t,this.cache=[],this.type=A.type,this.size=A.size,this.setValue=(function(i){switch(i){case 5126:return lD;case 35664:return cD;case 35665:return uD;case 35666:return dD;case 35674:return hD;case 35675:return pD;case 35676:return fD;case 5124:case 35670:return mD;case 35667:case 35671:return gD;case 35668:case 35672:return PD;case 35669:case 35673:return TD;case 5125:return DD;case 36294:return MD;case 36295:return ID;case 36296:return BD;case 35678:case 36198:case 36298:case 36306:case 35682:return ED;case 35679:case 36299:case 36307:return bD;case 35680:case 36300:case 36308:case 36293:return vD;case 36289:case 36303:case 36311:case 36292:return yD}})(A.type)}},ku=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,A,t){let i=this.seq;for(let n=0,r=i.length;n!==r;++n){let s=i[n];s.setValue(e,A[s.id],t)}}},jc=/(\w+)(\])?(\[|\.)?/g;function jh(a,e){a.seq.push(e),a.map[e.id]=e}function wD(a,e,A){let t=a.name,i=t.length;for(jc.lastIndex=0;;){let n=jc.exec(t),r=jc.lastIndex,s=n[1],U=n[2]==="]",o=n[3];if(U&&(s|=0),o===void 0||o==="["&&r+2===i){jh(A,o===void 0?new Ju(s,a,e):new Fu(s,a,e));break}{let l=A.map[s];l===void 0&&(l=new ku(s),jh(A,l)),A=l}}}var Ta=class{constructor(e,A){this.seq=[],this.map={};let t=e.getProgramParameter(A,e.ACTIVE_UNIFORMS);for(let i=0;i<t;++i){let n=e.getActiveUniform(A,i);wD(n,e.getUniformLocation(A,n.name),this)}}setValue(e,A,t,i){let n=this.map[A];n!==void 0&&n.setValue(e,t,i)}setOptional(e,A,t){let i=A[t];i!==void 0&&this.setValue(e,t,i)}static upload(e,A,t,i){for(let n=0,r=A.length;n!==r;++n){let s=A[n],U=t[s.id];U.needsUpdate!==!1&&s.setValue(e,U.value,i)}}static seqWithValue(e,A){let t=[];for(let i=0,n=e.length;i!==n;++i){let r=e[i];r.id in A&&t.push(r)}return t}};function Jh(a,e,A){let t=a.createShader(e);return a.shaderSource(t,A),a.compileShader(t),t}var CD=37297,RD=0;function Fh(a,e,A){let t=a.getShaderParameter(e,a.COMPILE_STATUS),i=a.getShaderInfoLog(e).trim();if(t&&i==="")return"";let n=/ERROR: 0:(\d+)/.exec(i);if(n){let r=parseInt(n[1]);return A.toUpperCase()+`

`+i+`

`+(function(s,U){let o=s.split(`
`),l=[],c=Math.max(U-6,0),u=Math.min(U+6,o.length);for(let h=c;h<u;h++){let p=h+1;l.push(`${p===U?">":" "} ${p}: ${o[h]}`)}return l.join(`
`)})(a.getShaderSource(e),r)}return i}function SD(a,e){let A=(function(t){let i=IA.getPrimaries(IA.workingColorSpace),n=IA.getPrimaries(t),r;switch(i===n?r="":i===Ms&&n===Ds?r="LinearDisplayP3ToLinearSRGB":i===Ds&&n===Ms&&(r="LinearSRGBToLinearDisplayP3"),t){case ut:case io:return[r,"LinearTransferOETF"];case FA:case Ql:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[r,"LinearTransferOETF"]}})(e);return`vec4 ${a}( vec4 value ) { return ${A[0]}( ${A[1]}( value ) ); }`}function LD(a,e){let A;switch(e){case Np:A="Linear";break;case Gp:A="Reinhard";break;case Op:A="OptimizedCineon";break;case Vp:A="ACESFilmic";break;case Yp:A="AgX";break;case zp:A="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),A="Linear"}return"vec3 "+a+"( vec3 color ) { return "+A+"ToneMapping( color ); }"}function la(a){return a!==""}function kh(a,e){let A=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,A).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xh(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xu(a){return a.replace(xD,HD)}var QD=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function HD(a,e){let A=tA[e];if(A===void 0){let t=QD.get(e);if(t===void 0)throw new Error("Can not resolve #include <"+e+">");A=tA[t],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,t)}return Xu(A)}var jD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(a){return a.replace(jD,JD)}function JD(a,e,A,t){let i="";for(let n=parseInt(e);n<parseInt(A);n++)i+=t.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return i}function Gh(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function FD(a,e,A,t){let i=a.getContext(),n=A.defines,r=A.vertexShader,s=A.fragmentShader,U=(function(j){let re="SHADOWMAP_TYPE_BASIC";return j.shadowMapType===Fd?re="SHADOWMAP_TYPE_PCF":j.shadowMapType===Fp?re="SHADOWMAP_TYPE_PCF_SOFT":j.shadowMapType===Fi&&(re="SHADOWMAP_TYPE_VSM"),re})(A),o=(function(j){let re="ENVMAP_TYPE_CUBE";if(j.envMap)switch(j.envMapMode){case gn:case jn:re="ENVMAP_TYPE_CUBE";break;case ka:re="ENVMAP_TYPE_CUBE_UV"}return re})(A),l=(function(j){let re="ENVMAP_MODE_REFLECTION";return j.envMap&&j.envMapMode===jn&&(re="ENVMAP_MODE_REFRACTION"),re})(A),c=(function(j){let re="ENVMAP_BLENDING_NONE";if(j.envMap)switch(j.combine){case eo:re="ENVMAP_BLENDING_MULTIPLY";break;case kp:re="ENVMAP_BLENDING_MIX";break;case Xp:re="ENVMAP_BLENDING_ADD"}return re})(A),u=(function(j){let re=j.envMapCubeUVHeight;if(re===null)return null;let ie=Math.log2(re)-2,Me=1/re;return{texelWidth:1/(3*Math.max(Math.pow(2,ie),112)),texelHeight:Me,maxMip:ie}})(A),h=A.isWebGL2?"":(function(j){return[j.extensionDerivatives||j.envMapCubeUVHeight||j.bumpMap||j.normalMapTangentSpace||j.clearcoatNormalMap||j.flatShading||j.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(j.extensionFragDepth||j.logarithmicDepthBuffer)&&j.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",j.extensionDrawBuffers&&j.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(j.extensionShaderTextureLOD||j.envMap||j.transmission)&&j.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(la).join(`
`)})(A),p=(function(j){return[j.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(la).join(`
`)})(A),f=(function(j){let re=[];for(let ie in j){let Me=j[ie];Me!==!1&&re.push("#define "+ie+" "+Me)}return re.join(`
`)})(n),m=i.createProgram(),M,T,D=A.glslVersion?"#version "+A.glslVersion+`
`:"";A.isRawShaderMaterial?(M=["#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,f].filter(la).join(`
`),M.length>0&&(M+=`
`),T=[h,"#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,f].filter(la).join(`
`),T.length>0&&(T+=`
`)):(M=[Gh(A),"#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,f,A.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",A.batching?"#define USE_BATCHING":"",A.instancing?"#define USE_INSTANCING":"",A.instancingColor?"#define USE_INSTANCING_COLOR":"",A.useFog&&A.fog?"#define USE_FOG":"",A.useFog&&A.fogExp2?"#define FOG_EXP2":"",A.map?"#define USE_MAP":"",A.envMap?"#define USE_ENVMAP":"",A.envMap?"#define "+l:"",A.lightMap?"#define USE_LIGHTMAP":"",A.aoMap?"#define USE_AOMAP":"",A.bumpMap?"#define USE_BUMPMAP":"",A.normalMap?"#define USE_NORMALMAP":"",A.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",A.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",A.displacementMap?"#define USE_DISPLACEMENTMAP":"",A.emissiveMap?"#define USE_EMISSIVEMAP":"",A.anisotropy?"#define USE_ANISOTROPY":"",A.anisotropyMap?"#define USE_ANISOTROPYMAP":"",A.clearcoatMap?"#define USE_CLEARCOATMAP":"",A.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",A.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",A.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",A.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",A.specularMap?"#define USE_SPECULARMAP":"",A.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",A.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",A.roughnessMap?"#define USE_ROUGHNESSMAP":"",A.metalnessMap?"#define USE_METALNESSMAP":"",A.alphaMap?"#define USE_ALPHAMAP":"",A.alphaHash?"#define USE_ALPHAHASH":"",A.transmission?"#define USE_TRANSMISSION":"",A.transmissionMap?"#define USE_TRANSMISSIONMAP":"",A.thicknessMap?"#define USE_THICKNESSMAP":"",A.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",A.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",A.mapUv?"#define MAP_UV "+A.mapUv:"",A.alphaMapUv?"#define ALPHAMAP_UV "+A.alphaMapUv:"",A.lightMapUv?"#define LIGHTMAP_UV "+A.lightMapUv:"",A.aoMapUv?"#define AOMAP_UV "+A.aoMapUv:"",A.emissiveMapUv?"#define EMISSIVEMAP_UV "+A.emissiveMapUv:"",A.bumpMapUv?"#define BUMPMAP_UV "+A.bumpMapUv:"",A.normalMapUv?"#define NORMALMAP_UV "+A.normalMapUv:"",A.displacementMapUv?"#define DISPLACEMENTMAP_UV "+A.displacementMapUv:"",A.metalnessMapUv?"#define METALNESSMAP_UV "+A.metalnessMapUv:"",A.roughnessMapUv?"#define ROUGHNESSMAP_UV "+A.roughnessMapUv:"",A.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+A.anisotropyMapUv:"",A.clearcoatMapUv?"#define CLEARCOATMAP_UV "+A.clearcoatMapUv:"",A.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+A.clearcoatNormalMapUv:"",A.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+A.clearcoatRoughnessMapUv:"",A.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+A.iridescenceMapUv:"",A.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+A.iridescenceThicknessMapUv:"",A.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+A.sheenColorMapUv:"",A.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+A.sheenRoughnessMapUv:"",A.specularMapUv?"#define SPECULARMAP_UV "+A.specularMapUv:"",A.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+A.specularColorMapUv:"",A.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+A.specularIntensityMapUv:"",A.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+A.transmissionMapUv:"",A.thicknessMapUv?"#define THICKNESSMAP_UV "+A.thicknessMapUv:"",A.vertexTangents&&A.flatShading===!1?"#define USE_TANGENT":"",A.vertexColors?"#define USE_COLOR":"",A.vertexAlphas?"#define USE_COLOR_ALPHA":"",A.vertexUv1s?"#define USE_UV1":"",A.vertexUv2s?"#define USE_UV2":"",A.vertexUv3s?"#define USE_UV3":"",A.pointsUvs?"#define USE_POINTS_UV":"",A.flatShading?"#define FLAT_SHADED":"",A.skinning?"#define USE_SKINNING":"",A.morphTargets?"#define USE_MORPHTARGETS":"",A.morphNormals&&A.flatShading===!1?"#define USE_MORPHNORMALS":"",A.morphColors&&A.isWebGL2?"#define USE_MORPHCOLORS":"",A.morphTargetsCount>0&&A.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",A.morphTargetsCount>0&&A.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+A.morphTextureStride:"",A.morphTargetsCount>0&&A.isWebGL2?"#define MORPHTARGETS_COUNT "+A.morphTargetsCount:"",A.doubleSided?"#define DOUBLE_SIDED":"",A.flipSided?"#define FLIP_SIDED":"",A.shadowMapEnabled?"#define USE_SHADOWMAP":"",A.shadowMapEnabled?"#define "+U:"",A.sizeAttenuation?"#define USE_SIZEATTENUATION":"",A.numLightProbes>0?"#define USE_LIGHT_PROBES":"",A.useLegacyLights?"#define LEGACY_LIGHTS":"",A.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",A.logarithmicDepthBuffer&&A.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),T=[h,Gh(A),"#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,f,A.useFog&&A.fog?"#define USE_FOG":"",A.useFog&&A.fogExp2?"#define FOG_EXP2":"",A.map?"#define USE_MAP":"",A.matcap?"#define USE_MATCAP":"",A.envMap?"#define USE_ENVMAP":"",A.envMap?"#define "+o:"",A.envMap?"#define "+l:"",A.envMap?"#define "+c:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",A.lightMap?"#define USE_LIGHTMAP":"",A.aoMap?"#define USE_AOMAP":"",A.bumpMap?"#define USE_BUMPMAP":"",A.normalMap?"#define USE_NORMALMAP":"",A.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",A.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",A.emissiveMap?"#define USE_EMISSIVEMAP":"",A.anisotropy?"#define USE_ANISOTROPY":"",A.anisotropyMap?"#define USE_ANISOTROPYMAP":"",A.clearcoat?"#define USE_CLEARCOAT":"",A.clearcoatMap?"#define USE_CLEARCOATMAP":"",A.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",A.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",A.iridescence?"#define USE_IRIDESCENCE":"",A.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",A.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",A.specularMap?"#define USE_SPECULARMAP":"",A.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",A.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",A.roughnessMap?"#define USE_ROUGHNESSMAP":"",A.metalnessMap?"#define USE_METALNESSMAP":"",A.alphaMap?"#define USE_ALPHAMAP":"",A.alphaTest?"#define USE_ALPHATEST":"",A.alphaHash?"#define USE_ALPHAHASH":"",A.sheen?"#define USE_SHEEN":"",A.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",A.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",A.transmission?"#define USE_TRANSMISSION":"",A.transmissionMap?"#define USE_TRANSMISSIONMAP":"",A.thicknessMap?"#define USE_THICKNESSMAP":"",A.vertexTangents&&A.flatShading===!1?"#define USE_TANGENT":"",A.vertexColors||A.instancingColor?"#define USE_COLOR":"",A.vertexAlphas?"#define USE_COLOR_ALPHA":"",A.vertexUv1s?"#define USE_UV1":"",A.vertexUv2s?"#define USE_UV2":"",A.vertexUv3s?"#define USE_UV3":"",A.pointsUvs?"#define USE_POINTS_UV":"",A.gradientMap?"#define USE_GRADIENTMAP":"",A.flatShading?"#define FLAT_SHADED":"",A.doubleSided?"#define DOUBLE_SIDED":"",A.flipSided?"#define FLIP_SIDED":"",A.shadowMapEnabled?"#define USE_SHADOWMAP":"",A.shadowMapEnabled?"#define "+U:"",A.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",A.numLightProbes>0?"#define USE_LIGHT_PROBES":"",A.useLegacyLights?"#define LEGACY_LIGHTS":"",A.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",A.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",A.logarithmicDepthBuffer&&A.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",A.toneMapping!==pn?"#define TONE_MAPPING":"",A.toneMapping!==pn?tA.tonemapping_pars_fragment:"",A.toneMapping!==pn?LD("toneMapping",A.toneMapping):"",A.dithering?"#define DITHERING":"",A.opaque?"#define OPAQUE":"",tA.colorspace_pars_fragment,SD("linearToOutputTexel",A.outputColorSpace),A.useDepthPacking?"#define DEPTH_PACKING "+A.depthPacking:"",`
`].filter(la).join(`
`)),r=Xu(r),r=kh(r,A),r=Xh(r,A),s=Xu(s),s=kh(s,A),s=Xh(s,A),r=Nh(r),s=Nh(s),A.isWebGL2&&A.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,T=["precision mediump sampler2DArray;","#define varying in",A.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",A.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);let b=D+M+r,x=D+T+s,y=Jh(i,i.VERTEX_SHADER,b),L=Jh(i,i.FRAGMENT_SHADER,x);function X(j){if(a.debug.checkShaderErrors){let re=i.getProgramInfoLog(m).trim(),ie=i.getShaderInfoLog(y).trim(),Me=i.getShaderInfoLog(L).trim(),He=!0,ge=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(He=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,m,y,L);else{let le=Fh(i,y,"vertex"),fe=Fh(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+le+`
`+fe)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):ie!==""&&Me!==""||(ge=!1);ge&&(j.diagnostics={runnable:He,programLog:re,vertexShader:{log:ie,prefix:M},fragmentShader:{log:Me,prefix:T}})}i.deleteShader(y),i.deleteShader(L),k=new Ta(i,m),z=(function(re,ie){let Me={},He=re.getProgramParameter(ie,re.ACTIVE_ATTRIBUTES);for(let ge=0;ge<He;ge++){let le=re.getActiveAttrib(ie,ge),fe=le.name,_=1;le.type===re.FLOAT_MAT2&&(_=2),le.type===re.FLOAT_MAT3&&(_=3),le.type===re.FLOAT_MAT4&&(_=4),Me[fe]={type:le.type,location:re.getAttribLocation(ie,fe),locationSize:_}}return Me})(i,m)}let k,z;i.attachShader(m,y),i.attachShader(m,L),A.index0AttributeName!==void 0?i.bindAttribLocation(m,0,A.index0AttributeName):A.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),this.getUniforms=function(){return k===void 0&&X(this),k},this.getAttributes=function(){return z===void 0&&X(this),z};let oe=A.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return oe===!1&&(oe=i.getProgramParameter(m,CD)),oe},this.destroy=function(){t.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=A.shaderType,this.name=A.shaderName,this.id=RD++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=L,this}var kD=0,Nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let A=e.vertexShader,t=e.fragmentShader,i=this._getShaderStage(A),n=this._getShaderStage(t),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let A=this.materialCache.get(e);for(let t of A)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let A=this.materialCache,t=A.get(e);return t===void 0&&(t=new Set,A.set(e,t)),t}_getShaderStage(e){let A=this.shaderCache,t=A.get(e);return t===void 0&&(t=new Gu(e),A.set(e,t)),t}},Gu=class{constructor(e){this.id=kD++,this.code=e,this.usedTimes=0}};function XD(a,e,A,t,i,n,r){let s=new ba,U=new Nu,o=[],l=i.isWebGL2,c=i.logarithmicDepthBuffer,u=i.vertexTextures,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return m===0?"uv":`uv${m}`}return{getParameters:function(m,M,T,D,b){let x=D.fog,y=b.geometry,L=m.isMeshStandardMaterial?D.environment:null,X=(m.isMeshStandardMaterial?A:e).get(m.envMap||L),k=X&&X.mapping===ka?X.image.height:null,z=p[m.type];m.precision!==null&&(h=i.getMaxPrecision(m.precision),h!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",h,"instead."));let oe=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,j=oe!==void 0?oe.length:0,re,ie,Me,He,ge=0;if(y.morphAttributes.position!==void 0&&(ge=1),y.morphAttributes.normal!==void 0&&(ge=2),y.morphAttributes.color!==void 0&&(ge=3),z){let hA=Ei[z];re=hA.vertexShader,ie=hA.fragmentShader}else re=m.vertexShader,ie=m.fragmentShader,U.update(m),Me=U.getVertexShaderID(m),He=U.getFragmentShaderID(m);let le=a.getRenderTarget(),fe=b.isInstancedMesh===!0,_=b.isBatchedMesh===!0,ne=!!m.map,xe=!!m.matcap,R=!!X,C=!!m.aoMap,Y=!!m.lightMap,ce=!!m.bumpMap,F=!!m.normalMap,Ue=!!m.displacementMap,G=!!m.emissiveMap,O=!!m.metalnessMap,W=!!m.roughnessMap,pe=m.anisotropy>0,de=m.clearcoat>0,w=m.iridescence>0,Te=m.sheen>0,$=m.transmission>0,Ae=pe&&!!m.anisotropyMap,me=de&&!!m.clearcoatMap,K=de&&!!m.clearcoatNormalMap,ve=de&&!!m.clearcoatRoughnessMap,ke=w&&!!m.iridescenceMap,We=w&&!!m.iridescenceThicknessMap,ye=Te&&!!m.sheenColorMap,Ie=Te&&!!m.sheenRoughnessMap,Xe=!!m.specularMap,xA=!!m.specularColorMap,te=!!m.specularIntensityMap,J=$&&!!m.transmissionMap,Ee=$&&!!m.thicknessMap,nA=!!m.gradientMap,eA=!!m.alphaMap,Yi=m.alphaTest>0,zA=!!m.alphaHash,wt=!!m.extensions,zn=!!y.attributes.uv1,Z=!!y.attributes.uv2,YA=!!y.attributes.uv3,gA=pn;return m.toneMapped&&(le!==null&&le.isXRRenderTarget!==!0||(gA=a.toneMapping)),{isWebGL2:l,shaderID:z,shaderType:m.type,shaderName:m.name,vertexShader:re,fragmentShader:ie,defines:m.defines,customVertexShaderID:Me,customFragmentShaderID:He,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:h,batching:_,instancing:fe,instancingColor:fe&&b.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:le===null?a.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ut,map:ne,matcap:xe,envMap:R,envMapMode:R&&X.mapping,envMapCubeUVHeight:k,aoMap:C,lightMap:Y,bumpMap:ce,normalMap:F,displacementMap:u&&Ue,emissiveMap:G,normalMapObjectSpace:F&&m.normalMapType===1,normalMapTangentSpace:F&&m.normalMapType===0,metalnessMap:O,