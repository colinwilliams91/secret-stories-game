import { sfxr } from 'jsfxr';

const clickSound = {
  'oldParams': true,
  'wave_type': 0,
  'p_env_attack': 0,
  'p_env_sustain': 0.015801133073791596,
  'p_env_punch': 0,
  'p_env_decay': 0.043,
  'p_base_freq': 0.727,
  'p_freq_limit': 0,
  'p_freq_ramp': 0.12169843284841453,
  'p_freq_dramp': 0,
  'p_vib_strength': 0,
  'p_vib_speed': 0,
  'p_arp_mod': 0,
  'p_arp_speed': 0,
  'p_duty': 0.5257613394880012,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0,
  'p_pha_offset': 0,
  'p_pha_ramp': 0,
  'p_lpf_freq': 0.202,
  'p_lpf_ramp': 0,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0.336,
  'p_hpf_ramp': 0,
  'sound_vol': 0.084,
  'sample_rate': 44100,
  'sample_size': 8
};

const thockSound = {
  'oldParams': true,
  'wave_type': 0,
  'p_env_attack': 0,
  'p_env_sustain': 0.015801133073791596,
  'p_env_punch': 0,
  'p_env_decay': 0.043,
  'p_base_freq': 0.727,
  'p_freq_limit': 0,
  'p_freq_ramp': 0.12169843284841453,
  'p_freq_dramp': 0,
  'p_vib_strength': 0,
  'p_vib_speed': 0,
  'p_arp_mod': 0,
  'p_arp_speed': 0,
  'p_duty': 0.518,
  'p_duty_ramp': 0.057,
  'p_repeat_speed': 0,
  'p_pha_offset': -0.489,
  'p_pha_ramp': -0.377,
  'p_lpf_freq': 0.122,
  'p_lpf_ramp': -0.386,
  'p_lpf_resonance': 0.725,
  'p_hpf_freq': 0.446,
  'p_hpf_ramp': -0.336,
  'sound_vol': 0.327,
  'sample_rate': 44100,
  'sample_size': 8
}

export const click = sfxr.toAudio(clickSound);
export const thock = sfxr.toAudio(thockSound);
