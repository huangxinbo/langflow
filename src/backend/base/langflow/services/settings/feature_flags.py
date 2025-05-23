from pydantic_settings import BaseSettings, SettingsConfigDict


class FeatureFlags(BaseSettings):
    mvp_components: bool = False
    model_config = SettingsConfigDict(env_prefix="LANGFLOW_FEATURE_")


FEATURE_FLAGS = FeatureFlags()
